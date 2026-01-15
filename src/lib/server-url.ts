export function getBaseUrlFromHeaders(headers: Headers): string {
  const configuredBaseUrl = process.env.PUBLIC_APP_URL ?? process.env.APP_URL
  if (configuredBaseUrl) return configuredBaseUrl.replace(/\/$/, '')

  const protocol = headers.get('x-forwarded-proto') ?? 'http'
  const host = headers.get('x-forwarded-host') ?? headers.get('host')

  if (!host) {
    throw new Error('Unable to determine base URL: missing Host header')
  }

  return `${protocol}://${host}`
}
