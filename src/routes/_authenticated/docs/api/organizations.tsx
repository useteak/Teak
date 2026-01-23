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
import { createSeoMeta } from '@/lib/seo'
import { DocsNav } from '@/components/docs-nav'
import CodeBlock from '@/components/ui/code-block'
import { ApiEndpointHeader } from '@/components/api-endpoint-header'

const title = 'Organizations'

export const Route = createFileRoute('/_authenticated/docs/api/organizations')({
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
          Organization endpoints let you fetch and update the current
          organization that owns an API key.
        </p>

        <p>
          All endpoints in this section use JSON and return a response envelope
          with <code>success</code> and <code>data</code> fields. Authenticated
          routes require the <code>Authorization: Bearer &lt;api_key&gt;</code>
          header.
        </p>

        <section className="mt-10">
          <h2>Get organization</h2>
          <p>Fetch the organization record for the authenticated API key.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader method="GET" path="/api/v1/{organizationId}" />
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
    "id": "org_123",
    "name": "Acme Inc.",
    "image": "https://cdn.example.com/org.png",
    "createdAt": "2025-01-10T12:00:00.000Z",
    "updatedAt": "2025-01-15T15:42:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2>Update organization</h2>
          <p>Update the organization name or image URL.</p>

          <div className="not-prose rounded-lg border bg-muted/40 p-3 text-sm">
            <ApiEndpointHeader method="PATCH" path="/api/v1/{organizationId}" />
            <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon icon={SecurityLockIcon} className="size-4" />
              <span>Authenticated</span>
            </div>
          </div>

          <h3 className="mt-6">Request body</h3>
          <div className="not-prose mt-3">
            <CodeBlock
              languages={jsonBlock(`{
  "name": "Acme Labs",
  "image": "https://cdn.example.com/org-updated.png"
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
    "id": "org_123",
    "name": "Acme Labs",
    "image": "https://cdn.example.com/org-updated.png",
    "createdAt": "2025-01-10T12:00:00.000Z",
    "updatedAt": "2025-01-16T08:20:00.000Z"
  }
}`)}
              defaultLanguage="json"
            />
          </div>
        </section>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/api/auth">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> Authentication
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs/api/projects">
              Projects <HugeiconsIcon icon={ArrowRightIcon} />
            </a>
          </Button>
        </div>
      </article>
    </div>
  )
}
