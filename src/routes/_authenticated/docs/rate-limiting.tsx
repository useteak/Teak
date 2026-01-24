import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRightIcon } from '@hugeicons/core-free-icons'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { Button } from '@/components/ui/button'
import { DocsNav } from '@/components/docs-nav'

const title = 'Rate limiting'

export const Route = createFileRoute('/_authenticated/docs/rate-limiting')({
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
          {config.productName} includes rate limits for public feedback
          submissions to keep ingestion reliable. Rate limits are enabled by
          default and applied per project.
        </p>

        <p>
          By default, each project allows 5 requests per IP per minute. You can
          turn rate limiting off per project when you need higher throughput,
          such as sending feedback from a trusted server integration.
        </p>

        <p>
          If you are calling the feedback API directly from a web browser, it is
          best to keep rate limits enabled. If you are routing traffic through
          your own servers, you can disable the limits for that project to avoid
          unintended throttling.
        </p>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/feedback">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Feedback
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
