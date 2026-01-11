import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/$organizationId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/$organizationId/"!</div>
}
