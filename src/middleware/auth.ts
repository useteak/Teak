import { redirect } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'

/**
 * Ensures a user is authenticated (or unauthenticated) before continuing.
 */
export const authMiddleware = (requireAuth = true) =>
  createMiddleware().server(async ({ next, pathname }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })

    // If / don't check auth
    if (pathname === '/') {
      return await next()
    }

    if (requireAuth && !session) {
      throw redirect({ to: '/login' })
    } else if (!requireAuth && session) {
      throw redirect({ to: '/' })
    }

    return await next()
  })
