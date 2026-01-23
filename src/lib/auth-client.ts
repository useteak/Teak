import { createAuthClient } from 'better-auth/react'
import { lastLoginMethodClient } from 'better-auth/client/plugins'

/**
 * Better Auth client for React usage.
 */
export const authClient = createAuthClient({
  plugins: [lastLoginMethodClient()],
})
