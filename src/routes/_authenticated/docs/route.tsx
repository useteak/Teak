import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { DocsSidebar } from '@/components/docs-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { auth } from '@/lib/auth'
import { createSeoMeta } from '@/lib/seo'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const getData = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  return {
    session,
  }
})

export const Route = createFileRoute('/_authenticated/docs')({
  component: RouteComponent,
  loader: () => getData(),
  head: () => ({
    meta: createSeoMeta({
      title: 'Docs',
    }),
  }),
})

function RouteComponent() {
  // return <div>Hello "/documentation"!</div>

  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
