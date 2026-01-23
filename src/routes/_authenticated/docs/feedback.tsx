import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { Button } from '@/components/ui/button'
import { IntegrationCodeBlock } from '@/components/integration-code-block'
import { DocsNav } from '@/components/docs-nav'

const title = 'Feedback'

export const Route = createFileRoute('/_authenticated/docs/feedback')({
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
          Feedback is the heart of {config.productName}. Each feedback item is
          tied to a project so you can keep product insights organized and route
          them to the right team.
        </p>

        <p>
          You can submit feedback from any product surface by hitting the
          feedback API. Include a description, pick a feedback type, and add any
          optional metadata you want to pass along for triage.
        </p>

        <ul>
          <li>
            <strong>Bug report:</strong> Capture unexpected behavior, regression
            issues, or error reports so the team can prioritize fixes.
          </li>
          <li>
            <strong>Feature request:</strong> Log new ideas or enhancements your
            customers want to see in the product roadmap.
          </li>
          <li>
            <strong>Improvement:</strong> Track small refinements or
            optimizations that make existing workflows better.
          </li>
          <li>
            <strong>Question:</strong> Collect clarification requests so your
            team can respond and refine documentation.
          </li>
          <li>
            <strong>Praise:</strong> Celebrate wins and capture what customers
            love about the product.
          </li>
          <li>
            <strong>Other:</strong> Keep notes that do not fit the main
            categories without losing the context.
          </li>
        </ul>

        <p>
          Use the example below to post feedback from your app, then review it
          in the dashboard under the project you targeted.
        </p>

        <div className="not-prose">
          <IntegrationCodeBlock
            organizationId="org_123"
            projectId="proj_456"
            hideComments
            className="mt-8"
          />
        </div>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/notifications">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Notifications
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/docs/rate-limiting">
              Rate limiting <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
