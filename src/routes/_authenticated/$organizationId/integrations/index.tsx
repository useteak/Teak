import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/$organizationId/integrations/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/$organizationId/integrations/"!</div>
}
