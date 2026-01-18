import { Outlet, createFileRoute } from '@tanstack/react-router'
import { authMiddleware } from '@/middleware/auth'

export const Route = createFileRoute('/_authenticated')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware()],
  },
})

function RouteComponent() {
  return <Outlet />
}
