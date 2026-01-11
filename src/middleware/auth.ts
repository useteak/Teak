import { redirect } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'

export const authMiddleware = (authed = true) =>
  createMiddleware().server(async ({ next }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })

    if (authed && !session) {
      throw redirect({ to: '/login' })
    } else if (!authed && session) {
      throw redirect({ to: '/' })
    }

    return await next()
  })
