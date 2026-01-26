import { Link, createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import {
  ArrowLeft01Icon,
  ArrowRightIcon,
  ComputerTerminal01Icon,
  Diamond02Icon,
  PhpIcon,
  PythonIcon,
  Typescript01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'
import { DocsNav } from '@/components/docs-nav'
import { Button } from '@/components/ui/button'
import CodeBlock from '@/components/ui/code-block'

const title = 'Authentication'

export const Route = createFileRoute('/_authenticated/docs/api/auth')({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: `${title} · API - Docs` }),
  }),
})

function RouteComponent() {
  const baseUrl = `${config.productUrl}/api/v1`
  const languages = useMemo<
    Array<{
      language: string
      icon: IconSvgElement
      label: string
      code: string
    }>
  >(
    () => [
      {
        language: 'typescript' as const,
        icon: Typescript01Icon,
        label: 'JS/TS',
        code: `const response = await fetch('${baseUrl}/organizations/{orgId}/projects', {
  method: 'GET',
  headers: {
    Authorization: 'Bearer <api_key>',
  },
})

const projects = await response.json()`,
      },
      {
        language: 'python' as const,
        icon: PythonIcon,
        label: 'Python',
        code: `import requests

response = requests.get(
    '${baseUrl}/organizations/{orgId}/projects',
    headers={
        'Authorization': 'Bearer <api_key>',
    },
)

projects = response.json()`,
      },
      {
        language: 'php' as const,
        icon: PhpIcon,
        label: 'PHP',
        code: `<?php

$response = file_get_contents(
  '${baseUrl}/organizations/{orgId}/projects',
  false,
  stream_context_create([
    'http' => [
      'method' => 'GET',
      'header' => "Authorization: Bearer <api_key>\r\n",
    ],
  ]),
);

$projects = json_decode($response, true);`,
      },
      {
        language: 'ruby' as const,
        icon: Diamond02Icon,
        label: 'Ruby',
        code: `require 'net/http'
require 'json'

uri = URI('${baseUrl}/organizations/{orgId}/projects')
request = Net::HTTP::Get.new(uri)
request['Authorization'] = 'Bearer <api_key>'

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

projects = JSON.parse(response.body)`,
      },
      {
        language: 'shell' as const,
        icon: ComputerTerminal01Icon,
        label: 'Curl',
        code: `curl ${baseUrl}/organizations/{orgId}/projects \\
  -H "Authorization: Bearer <api_key>"`,
      },
    ],
    [baseUrl],
  )

  return (
    <div>
      <DocsNav
        currentPage={title}
        parentPage={{ label: 'API', href: '/docs/api/overview' }}
      />

      <article>
        <h1 className="mt-10">{title}</h1>

        <p>
          Every authenticated request to the {config.productName} API must
          include a bearer token so we can identify the calling organization.
          Tokens are scoped to a single organization, and you can create or
          revoke keys at any time.
        </p>

        <p>
          To create a token, open your organization settings, navigate to API
          keys, and generate a new key. Store it in your secrets manager and
          reuse it across server-side jobs or integration services.
        </p>

        <p>
          Send the token in the <code>Authorization</code> header using the
          <code>Bearer</code> scheme. Authenticated endpoints return a 401
          response when the header is missing or invalid.
        </p>

        <div className="not-prose">
          <CodeBlock languages={languages} defaultLanguage="typescript" />
        </div>

        <div className="flex justify-between mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/api/overview">
              <HugeiconsIcon icon={ArrowLeft01Icon} /> API overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/docs/api/organizations">
              Organizations <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
