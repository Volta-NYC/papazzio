"use client"

import { useEffect, useState, type FormEvent } from "react"

import type { PerformerSchedule } from "@/lib/performer-schedule"

const fieldClass = "mt-2 w-full rounded border border-ink/25 bg-white px-4 py-3 font-normal text-ink focus:outline-gold"

async function request(method: string, body?: object) {
  const response = await fetch("/api/performers", {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store"
  })
  const result = await response.json()
  if (!response.ok) throw Object.assign(new Error(result.error ?? "Please try again."), { status: response.status })
  return result
}

export function PerformerEditor({ configured }: { configured: boolean }) {
  const [schedule, setSchedule] = useState<PerformerSchedule | null>(null)
  const [sha, setSha] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(configured)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [needsSignIn, setNeedsSignIn] = useState(false)

  useEffect(() => {
    if (!configured) return
    let active = true
    fetch("/api/performers", { cache: "no-store" })
      .then(async (response) => {
        if (response.status === 401) return
        const result = await response.json()
        if (!response.ok) throw new Error(result.error)
        if (active) { setSchedule(result.schedule); setSha(result.sha) }
      })
      .catch(() => { if (active) setError("The schedule could not be loaded. Please sign in and try again.") })
      .finally(() => { if (active) setBusy(false) })
    return () => { active = false }
  }, [configured])

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true); setError(""); setMessage("")
    try {
      await request("POST", { password })
      setPassword("")
      if (!schedule) {
        const result = await request("GET")
        setSchedule(result.schedule); setSha(result.sha)
      }
      setNeedsSignIn(false)
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Please try again.")
    } finally { setBusy(false) }
  }

  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true); setError(""); setMessage("")
    try {
      const result = await request("PUT", { schedule, sha })
      setSchedule(result.schedule); setSha(result.sha)
      setMessage("Published. Guests can now view the updated lineup.")
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Publishing failed. Your edits are still here.")
      if (failure && typeof failure === "object" && "status" in failure && failure.status === 401) setNeedsSignIn(true)
    } finally { setBusy(false) }
  }

  async function reload() {
    setBusy(true); setError(""); setMessage("")
    try {
      const result = await request("GET")
      setSchedule(result.schedule); setSha(result.sha)
      setMessage("Loaded the latest published schedule.")
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Please try again.")
    } finally { setBusy(false) }
  }

  async function signOut() {
    setBusy(true); setError(""); setMessage("")
    try {
      await request("DELETE")
      setSchedule(null); setSha(""); setPassword("")
    } catch { setError("Sign out failed. Please try again.") }
    finally { setBusy(false) }
  }

  if (!configured) {
    return <p className="mt-8 border border-ink/15 bg-cream p-6 font-bold leading-7">The performer editor is awaiting setup. Please contact your website manager for access.</p>
  }

  return (
    <div className="mt-8">
      {error ? <p role="alert" className="mb-6 border-l-4 border-tomato bg-cream p-4 font-bold leading-6">{error}</p> : null}
      {message ? <p role="status" className="mb-6 border-l-4 border-green-700 bg-cream p-4 font-bold leading-6">{message}</p> : null}
      {schedule && !needsSignIn ? (
        <form onSubmit={publish}>
          <fieldset disabled={busy} className="grid gap-6 disabled:opacity-60">
            <label className="block font-bold">
              Schedule heading
              <input className={fieldClass} value={schedule.heading} maxLength={120} required onChange={(event) => setSchedule({ ...schedule, heading: event.target.value })} />
            </label>
            {schedule.performers.map((performer, index) => (
              <section className="grid gap-4 border border-ink/15 bg-cream p-6" key={index}>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-heading text-3xl font-black">Performer {index + 1}</h2>
                  <button className="text-sm font-black text-tomato underline" type="button" onClick={() => setSchedule({ ...schedule, performers: schedule.performers.filter((_, i) => i !== index) })}>Remove performer {index + 1}</button>
                </div>
                <label className="block font-bold">
                  Name
                  <input className={fieldClass} value={performer.name} maxLength={120} required onChange={(event) => setSchedule({ ...schedule, performers: schedule.performers.map((item, i) => i === index ? { ...item, name: event.target.value } : item) })} />
                </label>
                <label className="block font-bold">
                  Description (optional)
                  <textarea className={fieldClass} value={performer.bio} rows={3} maxLength={1000} onChange={(event) => setSchedule({ ...schedule, performers: schedule.performers.map((item, i) => i === index ? { ...item, bio: event.target.value } : item) })} />
                </label>
                <label className="block font-bold">
                  Dates — one per line
                  <span className="mt-1 block text-sm font-normal text-ink/70">Include the month and day, for example October 8, 2026 · 6:30–9:30 PM.</span>
                  <textarea className={fieldClass} value={performer.dates.join("\n")} rows={3} maxLength={968} required onChange={(event) => setSchedule({ ...schedule, performers: schedule.performers.map((item, i) => i === index ? { ...item, dates: event.target.value.split("\n") } : item) })} />
                </label>
              </section>
            ))}
            {schedule.performers.length === 0 ? <p className="bg-cream p-6 font-bold leading-7">No performers are listed. Guests will see a message to call for the current lineup.</p> : null}
            <button className="button button-outline-dark w-fit disabled:cursor-not-allowed" disabled={schedule.performers.length >= 30} type="button" onClick={() => setSchedule({ ...schedule, performers: [...schedule.performers, { name: "", bio: "", dates: [""] }] })}>Add performer</button>
            <div className="flex flex-wrap gap-3">
              <button className="button button-dark" type="submit">{busy ? "Please wait…" : "Publish lineup"}</button>
              <button className="button button-outline-dark" type="button" onClick={reload}>Reload published lineup</button>
              <button className="button button-outline-dark" type="button" onClick={signOut}>Sign out</button>
            </div>
            <p className="text-sm font-bold leading-6 text-ink/70">Reloading or signing out clears unpublished edits.</p>
          </fieldset>
        </form>
      ) : (
        <form className="max-w-md border border-ink/15 bg-cream p-6" onSubmit={signIn}>
          <label className="block font-bold">
            Editor password
            <input className={fieldClass} type="password" autoComplete="current-password" value={password} maxLength={200} required disabled={busy} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button className="button button-dark mt-6 disabled:opacity-60" disabled={busy} type="submit">{busy ? "Please wait…" : "Sign in"}</button>
        </form>
      )}
    </div>
  )
}
