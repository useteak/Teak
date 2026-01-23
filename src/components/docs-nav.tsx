import { Link, useMatches } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserAccountDropdownContent } from '@/components/user-account-dropdown-content'

type DocsNavProps = {
  currentPage: string
  parentPage?: {
    label: string
    href: string
  }
}

export function DocsNav({ currentPage, parentPage }: DocsNavProps) {
  const session = useMatches({
    select: (matches) =>
      matches.find((match) => match.routeId === '/_authenticated/docs')
        ?.loaderData?.session,
  })

  const user = session?.user

  return (
    <nav className="p-3 flex items-center justify-between border-b sticky top-0 bg-background z-10">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/docs">Documentation</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {parentPage && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={parentPage.href}>{parentPage.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            <Button size="lg" variant="link" asChild>
              <Link to="/home">Dashboard</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer rounded focus:outline-none focus:ring-0">
                  <Avatar>
                    {user.image && <AvatarImage src={user.image} />}
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <UserAccountDropdownContent />
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button size="lg" variant="link" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button size="lg" asChild className="font-semibold">
              <Link to="/signup">Get started</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  )
}
