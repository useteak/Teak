/**
 * Simple in-memory fixed-window rate limiter.
 * State lives per server instance and resets on restart.
 */

interface RateLimitEntry {
  /** Timestamps (ms) of requests within the current window */
  timestamps: Array<number>
  /** When the current window started */
  windowStart: number
}

const store = new Map<string, RateLimitEntry>()

export interface RateLimitOptions {
  /** Maximum number of requests allowed in the window */
  limit: number
  /** Window duration in milliseconds */
  window: number
}

export interface RateLimitResult {
  /** Whether the request is allowed */
  allowed: boolean
  /** Remaining requests in the current window */
  remaining: number
  /** Milliseconds until the window resets (useful for Retry-After) */
  retryAfterMs: number
}

/**
 * Checks whether a request identified by `key` is allowed under the configured
 * fixed-window rate limit. If allowed, the request is recorded.
 */
export function checkRateLimit(
  key: string,
  options: RateLimitOptions,
): RateLimitResult {
  const now = Date.now()
  let entry = store.get(key)

  // If no entry or the window has expired, start a fresh window
  if (!entry || now - entry.windowStart >= options.window) {
    entry = { timestamps: [], windowStart: now }
    store.set(key, entry)
  }

  const retryAfterMs = Math.max(0, options.window - (now - entry.windowStart))

  if (entry.timestamps.length >= options.limit) {
    return { allowed: false, remaining: 0, retryAfterMs }
  }

  // Record this request
  entry.timestamps.push(now)

  return {
    allowed: true,
    remaining: options.limit - entry.timestamps.length,
    retryAfterMs,
  }
}

/**
 * Extracts a client IP from a Request, checking common proxy headers.
 * Falls back to a constant if none are available (e.g. local dev).
 */
export function getClientIp(request: Request): string {
  const headers = request.headers

  // Check common proxy headers in order of preference
  const forwardedFor = headers.get('x-forwarded-for')
  if (forwardedFor) {
    // x-forwarded-for can be a comma-separated list; take the first (original client)
    const first = forwardedFor.split(',')[0]?.trim()
    if (first) return first
  }

  const realIp = headers.get('x-real-ip')
  if (realIp) return realIp

  const cfIp = headers.get('cf-connecting-ip')
  if (cfIp) return cfIp

  const fastlyIp = headers.get('fastly-client-ip')
  if (fastlyIp) return fastlyIp

  // Fallback for local development where no proxy headers exist
  return 'unknown-ip'
}
