import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { createSeoMeta } from '@/lib/seo'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { config } from '@/config'
import { AppLogo } from '@/components/app-logo'

const title = 'Getting started'

export const Route = createFileRoute('/_authenticated/docs/')({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: `Docs · ${title}` }),
  }),
})

function RouteComponent() {
  return (
    <div>
      <nav className="p-3 flex items-center justify-between border-b sticky top-0 bg-background">
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
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      <article>
        <AppLogo imageClassName="w-32" />

        <h1 className="mt-10">{title}</h1>

        <p>
          Welcome to {config.productName}. We're so happy you're here! To make
          your experience using {config.productName} as smooth as possible,
          we'll guide you through everything you need to know. From signing up,
          to starting to collect user feedback.
        </p>

        <p>
          To start off, you need an account. There's a few different ways of
          getting an account. You can read more about this in{' '}
          <Link to="/docs/auth">Authentication</Link>. But in short, you can
          either choose to sign up using one of our OAuth2 providers, or using
          your email and choosing a password.
        </p>
      </article>
    </div>
  )
}
