import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { AppLogo } from '@/components/app-logo'
import { Button } from '@/components/ui/button'
import { DocsNav } from '@/components/docs-nav'

const title = 'Getting started'

export const Route = createFileRoute('/_authenticated/docs/')({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: `${title} · Docs` }),
  }),
})

function RouteComponent() {
  return (
    <div>
      <DocsNav currentPage={title} />

      <article>
        <AppLogo withLink={false} imageClassName="w-32" />

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

        <div className="flex justify-end mt-10 not-prose">
          <Button variant="outline" asChild>
            <Link to="/docs/auth">
              Authentication <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
