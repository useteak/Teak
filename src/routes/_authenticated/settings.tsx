import { createFileRoute } from '@tanstack/react-router'
import { createSeoMeta } from '@/lib/seo'

export const Route = createFileRoute('/_authenticated/settings')({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: 'Settings' }),
  }),
})

function RouteComponent() {
  return <div>Hello "/_authenticated/settings"!</div>
}
