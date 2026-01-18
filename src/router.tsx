import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

/**
 * Creates the app's TanStack Router instance.
 */
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
