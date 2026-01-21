import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
  useRouter,
} from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowLeft01Icon,
  SecurityLockIcon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { createSeoMeta } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import AppFooter from '@/components/app-footer'

export const Route = createFileRoute('/_authenticated/account/settings')({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: 'Account Settings' }),
  }),
})

function RouteComponent() {
  const location = useLocation()

  const router = useRouter()

  return (
    <SidebarProvider>
      <div className="flex flex-col gap-8 flex-1 px-6 py-12 w-full max-w-6xl mx-auto">
        <div className="space-y-5">
          <div className="space-y-3">
            <Button
              className="-ml-3.5"
              variant="link"
              size="sm"
              onClick={() => {
                router.history.back()
              }}
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} />
              Back
            </Button>
            <h1 className="text-2xl flex-1 font-medium">Account settings</h1>
          </div>

          <Separator />
        </div>

        <div className="flex items-start gap-16">
          <SidebarMenu className="flex-1 max-w-64 sticky top-6">
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={location.pathname.startsWith(
                  '/account/settings/general',
                )}
                asChild
              >
                <Link to="/account/settings/general">
                  <HugeiconsIcon icon={UserIcon} />
                  General
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={location.pathname.startsWith(
                  '/account/settings/authentication',
                )}
                asChild
              >
                <Link to="/account/settings/authentication">
                  <HugeiconsIcon icon={SecurityLockIcon} />
                  Authentication
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <div className="flex flex-1 flex-col gap-8 min-w-0 pb-8">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
