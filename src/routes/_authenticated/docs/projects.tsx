import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { Button } from '@/components/ui/button'
import { DocsNav } from '@/components/docs-nav'

const title = 'Projects'

export const Route = createFileRoute('/_authenticated/docs/projects')({
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
          Projects are where you organize feedback streams inside{' '}
          {config.productName}. Each project can represent a product line,
          feature area, or client so the team can keep insights focused.
        </p>

        <p>
          When you create a project, you set its name and get a dedicated
          feedback stream. Each project includes an integration snippet so you
          can route submissions from the right product surface.
        </p>

        <p>
          Everyone in the organization can see the project list. Project
          settings let you toggle rate limiting for public submissions and
          manage your own email notification subscription for new feedback.
        </p>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/organizations">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Organizations
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/docs/notifications">
              Notifications <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
