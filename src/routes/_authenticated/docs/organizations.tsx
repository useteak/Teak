import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { Button } from '@/components/ui/button'
import { DocsNav } from '@/components/docs-nav'

const title = 'Organizations'

export const Route = createFileRoute('/_authenticated/docs/organizations')({
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
          Organizations are the shared workspace inside {config.productName}.
          Every project, feedback feed, and teammate lives inside an
          organization so you can keep customer insights grouped by team or
          product line.
        </p>

        <p>
          When you sign up, we automatically create your first organization and
          add you as a member. Members can invite teammates from organization
          settings to collaborate on the same feedback streams.
        </p>

        <p>
          You can belong to multiple organizations and switch between them from
          the organization switcher in the sidebar. This makes it easy to
          separate internal teams, client work, or product lines without mixing
          feedback data.
        </p>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/auth">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Authentication
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/docs/projects">
              Projects <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
