import { createHash, createHmac, timingSafeEqual } from "node:crypto"

export const performerSessionCookie = "papazzio-performer-session"
export const performerSessionSeconds = 8 * 60 * 60

export function secretsMatch(candidate: string, expected: string) {
  return timingSafeEqual(
    createHash("sha256").update(candidate).digest(),
    createHash("sha256").update(expected).digest()
  )
}

function signature(expires: string, password: string, secret: string) {
  return createHmac("sha256", secret).update(`performers:${expires}:${password}`).digest("hex")
}

export function createPerformerSession(password: string, secret: string, now = Date.now()) {
  const expires = String(Math.floor(now / 1000) + performerSessionSeconds)
  return `${expires}.${signature(expires, password, secret)}`
}

export function validPerformerSession(session: string | undefined, password: string, secret: string, now = Date.now()) {
  if (!session || password.length < 20 || secret.length < 32) return false
  const parts = session.split(".")
  if (parts.length !== 2 || !/^\d{10}$/.test(parts[0]) || !/^[a-f0-9]{64}$/.test(parts[1])) return false
  const expires = Number(parts[0])
  const current = Math.floor(now / 1000)
  if (expires <= current || expires > current + performerSessionSeconds) return false
  return secretsMatch(parts[1], signature(parts[0], password, secret))
}
