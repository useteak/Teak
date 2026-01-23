import { Link, createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowLeft01Icon,
  ArrowRightIcon,
  SecurityLockIcon,
  ThirdBracketIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import type { BundledLanguage } from 'shiki'
import { Button } from '@/components/ui/button'
import { ApiEndpointHeader } from '@/components/api-endpoint-header'
import { createSeoMeta } from '@/lib/seo'
import { DocsNav } from '@/components/docs-nav'
import CodeBlock from '@/components/ui/code-block'

const title = 'Projects'

export const Route = createFileRoute(
  '/_authenticated/docs/api/projects' as any,
)({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: `${title} · API - Docs` }),
  }),
})

function RouteComponent() {
  const jsonBlock = (code: string) => [
    {
      language: 'json' as BundledLanguage,
      icon: ThirdBracketIcon as IconSvgElement,
      label: 'JSON',
      code,
    },
  ]

  return (
    <div>
      <DocsNav
        currentPage={title}
        parentPage={{ label: 'API', href: '/docs/api/overview' }}
      />

      <article>
        <h1 className="mt-10">{title}</h1>

        <p>
          Project endpoints let you create and manage feedback streams within an
          organization.
        </p>

        <p>
          All endpoints in this section use JSON and return a response envelope
          with <code>success</code> and <code>data</code> fields. Authenticated
          routes require the <code>Authorization: Bearer &lt;api_key&gt;</code>
          header.
        </p>

        <section className="mt-12">
          <h2>List projects</h2>
          <p>Return every project that belongs to the organization.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="GET"
              path="/api/v1/{organizationId}/projects"
            />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={SecurityLockIcon} className="size-4" />
              <span>Authenticated</span>
            </div>
          </div>

          <h3 className="mt-6">Response</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "success": true,
  "data": [
    {
      "id": "proj_456",
      "title": "Website feedback",
      "rateLimitingEnabled": true,
      "organizationId": "org_123",
      "createdAt": "2025-01-12T09:00:00.000Z",
      "updatedAt": "2025-01-12T09:00:00.000Z"
    }
  ]
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Create project</h2>
          <p>
            Create a new project and automatically add all organization users.
          </p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="POST"
              path="/api/v1/{organizationId}/projects"
            />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={SecurityLockIcon} className="size-4" />
              <span>Authenticated</span>
            </div>
          </div>

          <h3 className="mt-6">Request body</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "title": "Website feedback"
}`)}
              defaultLanguage="json"
            />
          </div>

          <h3 className="mt-6">Response</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "success": true,
  "data": {
    "id": "proj_456",
    "title": "Website feedback",
    "rateLimitingEnabled": true,
    "organizationId": "org_123",
    "createdAt": "2025-01-12T09:00:00.000Z",
    "updatedAt": "2025-01-12T09:00:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2>Get project</h2>
          <p>Retrieve details for a single project.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="GET"
              path="/api/v1/{organizationId}/projects/{projectId}"
            />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={SecurityLockIcon} className="size-4" />
              <span>Authenticated</span>
            </div>
          </div>

          <h3 className="mt-6">Response</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "success": true,
  "data": {
    "id": "proj_456",
    "title": "Website feedback",
    "rateLimitingEnabled": true,
    "organizationId": "org_123",
    "createdAt": "2025-01-12T09:00:00.000Z",
    "updatedAt": "2025-01-12T09:00:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Update project</h2>
          <p>Rename a project or update its rate limiting flag.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="PATCH"
              path="/api/v1/{organizationId}/projects/{projectId}"
            />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={SecurityLockIcon} className="size-4" />
              <span>Authenticated</span>
            </div>
          </div>

          <h3 className="mt-6">Request body</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "title": "Mobile app feedback",
  "rateLimitingEnabled": false
}`)}
              defaultLanguage="json"
            />
          </div>

          <h3 className="mt-6">Response</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "success": true,
  "data": {
    "id": "proj_456",
    "title": "Mobile app feedback",
    "rateLimitingEnabled": false,
    "organizationId": "org_123",
    "createdAt": "2025-01-12T09:00:00.000Z",
    "updatedAt": "2025-01-18T18:30:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Delete project</h2>
          <p>Remove a project and its related feedback.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="DELETE"
              path="/api/v1/{organizationId}/projects/{projectId}"
            />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={SecurityLockIcon} className="size-4" />
              <span>Authenticated</span>
            </div>
          </div>

          <h3 className="mt-6">Response</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "success": true,
  "data": {
    "deleted": true
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/api/organizations">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Organizations
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/api/feedback">
              Feedback <HugeiconsIcon icon={ArrowRightIcon} />
            </a>
          </Button>
        </div>
      </article>
    </div>
  )
}
