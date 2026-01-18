/**
 * Resolves the base URL for the current request, falling back to env config.
 */
export function getBaseUrlFromHeaders(headers: Headers): string {
  const configuredBaseUrl = process.env.PUBLIC_APP_URL ?? process.env.APP_URL
  if (configuredBaseUrl) return configuredBaseUrl.replace(/\/$/, '')

  const forwardedProto = headers.get('x-forwarded-proto')
  const protocol = forwardedProto?.split(',')[0]?.trim() || 'http'

  const forwardedHost = headers.get('x-forwarded-host')
  const hostHeader = forwardedHost ?? headers.get('host')
  const host = hostHeader?.split(',')[0]?.trim()

  if (!host) {
    throw new Error('Unable to determine base URL: missing Host header')
  }

  return `${protocol}://${host}`
}
