import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { Button } from '@/components/ui/button'
import { DocsNav } from '@/components/docs-nav'

const title = 'Authentication'

export const Route = createFileRoute('/_authenticated/docs/auth')({
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
        <h1 className="mt-10">{title}</h1>

        <p>
          {config.productName} uses a simple, secure sign-in flow so you can get
          from signup to feedback in minutes. You can create an account with an
          email and password or use a supported social provider like GitHub or
          Linear.
        </p>

        <p>
          To sign up, head to the <Link to="/signup">registration page</Link>,
          fill in your name, email, and a strong password. We'll create your
          first organization automatically and route you to your dashboard so
          you can start collecting insights immediately.
        </p>

        <p>
          To log in, visit the <Link to="/login">sign-in page</Link> and use the
          same credentials or the provider you used at signup. If you've
          forgotten your password, use the reset link to get a one-time email
          and set a new password.
        </p>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Getting started
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/docs/organizations">
              Organizations <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
