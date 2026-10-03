import assert from "node:assert/strict"
import { test } from "node:test"

import { createPerformerSession, secretsMatch, validPerformerSession, performerSessionSeconds } from "../src/lib/performer-auth.ts"
import { validateSchedule } from "../src/lib/performer-schedule.ts"

const password = "test-password-for-performer-editor-only"
const secret = "test-session-secret-for-performer-editor-only"
const now = Date.UTC(2026, 9, 3, 12)

test("sessions accept the correct secret and expire after eight hours", () => {
  const session = createPerformerSession(password, secret, now)
  assert.equal(validPerformerSession(session, password, secret, now), true)
  assert.equal(validPerformerSession(session, password, secret, now + performerSessionSeconds * 1000), false)
  assert.equal(validPerformerSession(session, password, secret, now - 1000), false)
})

test("sessions reject tampering, malformed values, and rotated credentials", () => {
  const session = createPerformerSession(password, secret, now)
  const [expires, signature] = session.split(".")
  for (const invalid of [undefined, "", "garbage", `${expires}.bad`, `${expires}.${"0".repeat(64)}`, `${Number(expires) + 1}.${signature}`, `${session}.extra`]) {
    assert.equal(validPerformerSession(invalid, password, secret, now), false)
  }
  assert.equal(validPerformerSession(session, `${password}-rotated`, secret, now), false)
  assert.equal(validPerformerSession(session, password, `${secret}-rotated`, now), false)
  assert.equal(validPerformerSession(session, "short", secret, now), false)
  assert.equal(validPerformerSession(session, password, "short", now), false)
  assert.equal(secretsMatch("a", "a"), true)
  assert.equal(secretsMatch("a", "a-longer-wrong-password"), false)
})

test("schedule accepts real entries, trims text, and drops unrelated fields", () => {
  assert.deepEqual(validateSchedule({
    heading: " October 2026 ",
    path: "src/app/page.tsx",
    performers: [{ name: " Leo ", bio: " Jazz and Italian classics. ", dates: [" October 8, 2026 "], admin: true }]
  }), {
    heading: "October 2026",
    performers: [{ name: "Leo", bio: "Jazz and Italian classics.", dates: ["October 8, 2026"] }]
  })
  assert.deepEqual(validateSchedule({ heading: "Coming soon", performers: [] }), { heading: "Coming soon", performers: [] })
})

test("schedule rejects invalid content and enforces item and length limits", () => {
  const performer = { name: "Leo", bio: "", dates: ["October 8, 2026"] }
  for (const invalid of [
    null, {}, { heading: "", performers: [] }, { heading: "x".repeat(121), performers: [] },
    { heading: "October", performers: "Leo" },
    { heading: "October", performers: Array(31).fill(performer) },
    ...[
      { ...performer, name: " " }, { ...performer, bio: "x".repeat(1001) },
      { ...performer, dates: [] }, { ...performer, dates: [""] },
      { ...performer, dates: [23] }, { ...performer, dates: Array(9).fill("October 8") },
      { ...performer, dates: ["x".repeat(121)] }, { name: "Leo" }
    ].map((entry) => ({ heading: "October", performers: [entry] }))
  ]) assert.throws(() => validateSchedule(invalid))
})
