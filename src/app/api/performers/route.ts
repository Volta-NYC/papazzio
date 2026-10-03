import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

import { createPerformerSession, performerSessionCookie, performerSessionSeconds, secretsMatch, validPerformerSession } from "@/lib/performer-auth"
import { validateSchedule } from "@/lib/performer-schedule"
import { performerEditorConfigured, readPerformerSchedule, savePerformerSchedule } from "@/lib/performer-store"

export const runtime = "nodejs"

function reply(body: object, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } })
}

function authenticated(request: NextRequest) {
  return performerEditorConfigured() && validPerformerSession(
    request.cookies.get(performerSessionCookie)?.value,
    process.env.PERFORMERS_ADMIN_PASSWORD ?? "",
    process.env.PERFORMERS_SESSION_SECRET ?? ""
  )
}

function sameOrigin(request: NextRequest) {
  return request.headers.get("origin") === request.nextUrl.origin
}

async function readBody(request: NextRequest) {
  const body = await request.text()
  if (body.length > 32000) throw new Error("The schedule is too long. Please shorten the descriptions.")
  try {
    return JSON.parse(body)
  } catch {
    throw new Error("The submitted information is invalid.")
  }
}

export async function GET(request: NextRequest) {
  if (!authenticated(request)) return reply({ error: "Please sign in to edit performers." }, 401)
  try {
    return reply(await readPerformerSchedule(true))
  } catch {
    return reply({ error: "The schedule could not be loaded. Please try again or contact your website manager." }, 502)
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return reply({ error: "Please sign in from the editor page." }, 403)
  if (!performerEditorConfigured()) return reply({ error: "The performer editor is awaiting setup by your website manager." }, 503)
  let body
  try {
    body = await readBody(request)
  } catch {
    return reply({ error: "Please enter a valid password." }, 400)
  }
  if (!body || typeof body.password !== "string" || !secretsMatch(body.password, process.env.PERFORMERS_ADMIN_PASSWORD!)) {
    return reply({ error: "The password is incorrect." }, 401)
  }
  const response = reply({ signedIn: true })
  response.cookies.set(performerSessionCookie, createPerformerSession(
    process.env.PERFORMERS_ADMIN_PASSWORD!, process.env.PERFORMERS_SESSION_SECRET!
  ), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: performerSessionSeconds
  })
  return response
}

export async function PUT(request: NextRequest) {
  if (!sameOrigin(request)) return reply({ error: "Please publish from the editor page." }, 403)
  if (!authenticated(request)) return reply({ error: "Your session expired. Sign in again before publishing." }, 401)
  let schedule, sha
  try {
    const body = await readBody(request)
    schedule = validateSchedule(body?.schedule)
    sha = body?.sha
    if (typeof sha !== "string" || !/^[a-f0-9]{40}$/.test(sha)) throw new Error("Please reload the schedule before publishing.")
  } catch (error) {
    return reply({ error: error instanceof Error ? error.message : "The schedule is invalid." }, 400)
  }
  try {
    const newSha = await savePerformerSchedule(schedule, sha)
    revalidatePath("/specials/live-music/performers")
    return reply({ sha: newSha, schedule })
  } catch (error) {
    return reply({ error: error instanceof Error ? error.message : "Publishing failed. Please try again." }, 502)
  }
}

export async function DELETE(request: NextRequest) {
  if (!sameOrigin(request)) return reply({ error: "Please sign out from the editor page." }, 403)
  const response = reply({ signedIn: false })
  response.cookies.set(performerSessionCookie, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 })
  return response
}
