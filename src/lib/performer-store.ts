import "server-only"

import initialSchedule from "@/content/performers.json"
import { validateSchedule, type PerformerSchedule } from "@/lib/performer-schedule"

// The editor can only update this content file, never a client-supplied path.
const fileUrl = "https://api.github.com/repos/Volta-NYC/papazzio/contents/src/content/performers.json"

export function performerEditorConfigured() {
  return Boolean(
    (process.env.PERFORMERS_ADMIN_PASSWORD?.length ?? 0) >= 20 &&
    (process.env.PERFORMERS_SESSION_SECRET?.length ?? 0) >= 32 &&
    process.env.PERFORMERS_GITHUB_TOKEN &&
    process.env.PERFORMERS_GITHUB_BRANCH
  )
}

function headers() {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.PERFORMERS_GITHUB_TOKEN}`,
    "X-GitHub-Api-Version": "2026-03-10"
  }
}

export async function readPerformerSchedule(fresh = false): Promise<{ schedule: PerformerSchedule; sha: string }> {
  if (!process.env.PERFORMERS_GITHUB_TOKEN || !process.env.PERFORMERS_GITHUB_BRANCH) {
    if (fresh) throw new Error("Publishing is not configured yet. Contact your website manager.")
    return { schedule: validateSchedule(initialSchedule), sha: "" }
  }
  const response = await fetch(`${fileUrl}?ref=${encodeURIComponent(process.env.PERFORMERS_GITHUB_BRANCH)}`, {
    headers: headers(),
    ...(fresh ? { cache: "no-store" as const } : { next: { revalidate: 60 } }),
    signal: AbortSignal.timeout(10000)
  })
  if (!response.ok) throw new Error("The schedule could not be loaded. Please try again or contact your website manager.")
  const file = await response.json()
  if (file.encoding !== "base64" || typeof file.content !== "string" || typeof file.sha !== "string") {
    throw new Error("The stored schedule is invalid. Contact your website manager.")
  }
  return {
    schedule: validateSchedule(JSON.parse(Buffer.from(file.content, "base64").toString("utf8"))),
    sha: file.sha
  }
}

export async function publicPerformerSchedule() {
  try {
    return (await readPerformerSchedule()).schedule
  } catch {
    // Keep the public page available during a temporary GitHub outage.
    return validateSchedule(initialSchedule)
  }
}

export async function savePerformerSchedule(schedule: PerformerSchedule, sha: string) {
  if (!performerEditorConfigured()) throw new Error("Publishing is not configured yet.")
  if (!/^[a-f0-9]{40}$/.test(sha)) throw new Error("Please reload the schedule before publishing.")
  const response = await fetch(fileUrl, {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
    body: JSON.stringify({
      branch: process.env.PERFORMERS_GITHUB_BRANCH,
      message: "content: update live music performers",
      content: Buffer.from(`${JSON.stringify(validateSchedule(schedule), null, 2)}\n`).toString("base64"),
      sha
    })
  })
  if (response.status === 409 || response.status === 422) {
    throw new Error("The schedule changed or publishing was blocked. Reload the latest schedule before trying again.")
  }
  if (!response.ok) throw new Error("Publishing failed. Your edits are still here. Please try again or contact your website manager.")
  const result = await response.json()
  return result.content.sha as string
}
