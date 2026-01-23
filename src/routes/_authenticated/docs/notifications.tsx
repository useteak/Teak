import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { Button } from '@/components/ui/button'
import { DocsNav } from '@/components/docs-nav'

const title = 'Notifications'

export const Route = createFileRoute('/_authenticated/docs/notifications')({
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
          Notifications keep you in the loop on the feedback streams that matter
          most. {config.productName} sends email updates when new feedback
          arrives in projects you subscribe to.
        </p>

        <p>
          Each project has its own subscription toggle, so you can opt in or out
          individually. This lets product leads stay subscribed to their primary
          initiatives while keeping inboxes clear for everything else.
        </p>

        <p>
          To manage subscriptions, open a project in the dashboard and use the
          My subscription toggle in project settings. You can change your
          settings at any time.
        </p>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/projects">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Projects
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/docs/feedback">
              Feedback <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
