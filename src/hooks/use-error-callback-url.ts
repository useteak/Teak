import { useMemo } from 'react'

/**
 * Builds an error callback URL preserving redirect and email query params.
 */
export function useErrorCallbackURL(
  basePath: string,
  params: { redirect?: string; email?: string },
): string {
  return useMemo(() => {
    const searchParams = new URLSearchParams()
    if (params.redirect) searchParams.set('redirect', params.redirect)
    if (params.email) searchParams.set('email', params.email)
    const query = searchParams.toString()
    return query ? `${basePath}?${query}` : basePath
  }, [basePath, params.redirect, params.email])
}
