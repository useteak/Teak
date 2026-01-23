import { createFileRoute } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowLeft01Icon,
  Globe02Icon,
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

const title = 'Feedback'

export const Route = createFileRoute(
  '/_authenticated/docs/api/feedback' as any,
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
          Feedback endpoints let you collect customer input and manage feedback
          items tied to a project.
        </p>

        <p>
          Authenticated routes require the{' '}
          <code>Authorization: Bearer &lt;api_key&gt;</code> header. Public
          feedback submissions support CORS and can be rate limited per project.
        </p>

        <section className="mt-12">
          <h2>List feedback</h2>
          <p>Return all feedback items for a project.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="GET"
              path="/api/v1/{organizationId}/projects/{projectId}/feedback"
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
      "id": "fb_789",
      "description": "Search results feel slow on mobile",
      "type": "BUG",
      "email": "customer@example.com",
      "metadata": {
        "page": "Search"
      },
      "projectId": "proj_456",
      "createdAt": "2025-01-20T11:45:00.000Z",
      "updatedAt": "2025-01-20T11:45:00.000Z"
    }
  ]
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Submit feedback (public)</h2>
          <p>
            Collect feedback from customers without requiring authentication.
            This endpoint supports CORS and is rate limited when the project
            setting is enabled.
          </p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="POST"
              path="/api/v1/{organizationId}/projects/{projectId}/feedback"
            />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={Globe02Icon} className="size-4" />
              <span>Public</span>
            </div>
          </div>

          <h3 className="mt-6">Request body</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "description": "Search results feel slow on mobile",
  "type": "BUG",
  "email": "customer@example.com",
  "metadata": {
    "page": "Search"
  }
}`)}
              defaultLanguage="json"
            />
          </div>

          <p className="mt-4">
            Valid <code>type</code> values: <code>BUG</code>,{' '}
            <code>FEATURE_REQUEST</code>, <code>IMPROVEMENT</code>,{' '}
            <code>QUESTION</code>, <code>PRAISE</code>, <code>OTHER</code>.
          </p>

          <h3 className="mt-6">Response</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "success": true,
  "data": {
    "id": "fb_789",
    "description": "Search results feel slow on mobile",
    "type": "BUG",
    "email": "customer@example.com",
    "metadata": {
      "page": "Search"
    },
    "projectId": "proj_456",
    "createdAt": "2025-01-20T11:45:00.000Z",
    "updatedAt": "2025-01-20T11:45:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2>Get feedback</h2>
          <p>Retrieve a single feedback item by ID.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="GET"
              path="/api/v1/{organizationId}/projects/{projectId}/feedback/{feedbackId}"
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
    "id": "fb_789",
    "description": "Search results feel slow on mobile",
    "type": "BUG",
    "email": "customer@example.com",
    "metadata": {
      "page": "Search"
    },
    "projectId": "proj_456",
    "createdAt": "2025-01-20T11:45:00.000Z",
    "updatedAt": "2025-01-20T11:45:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Update feedback</h2>
          <p>Update feedback fields such as description or metadata.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="PATCH"
              path="/api/v1/{organizationId}/projects/{projectId}/feedback/{feedbackId}"
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
  "description": "Search results feel slow on iOS",
  "metadata": {
    "platform": "iOS"
  }
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
    "id": "fb_789",
    "description": "Search results feel slow on iOS",
    "type": "BUG",
    "email": "customer@example.com",
    "metadata": {
      "platform": "iOS"
    },
    "projectId": "proj_456",
    "createdAt": "2025-01-20T11:45:00.000Z",
    "updatedAt": "2025-01-21T09:05:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Delete feedback</h2>
          <p>Remove a feedback item from the project.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader
              method="DELETE"
              path="/api/v1/{organizationId}/projects/{projectId}/feedback/{feedbackId}"
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

        <div className="flex justify-start mt-10 not-prose">
          <Button asChild variant="outline">
            <a href="/docs/api/projects">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Projects
            </a>
          </Button>
        </div>
      </article>
    </div>
  )
}
