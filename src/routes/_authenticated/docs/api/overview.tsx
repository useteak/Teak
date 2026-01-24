import { Link, createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import {
  ArrowRightIcon,
  ComputerTerminal01Icon,
  Diamond02Icon,
  PhpIcon,
  PythonIcon,
  ThirdBracketIcon,
  Typescript01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import type { BundledLanguage } from 'shiki'
import { Button } from '@/components/ui/button'
import { config } from '@/config'
import { createSeoMeta } from '@/lib/seo'
import { DocsNav } from '@/components/docs-nav'
import CodeBlock from '@/components/ui/code-block'

const title = 'API overview'

export const Route = createFileRoute('/_authenticated/docs/api/overview')({
  component: RouteComponent,
  head: () => ({
    meta: createSeoMeta({ title: `${title} · Docs` }),
  }),
})

function RouteComponent() {
  const baseUrl = `${config.productUrl}/api/v1`
  const errorLanguages = useMemo<
    Array<{
      language: BundledLanguage
      icon: IconSvgElement
      label: string
      code: string
    }>
  >(
    () => [
      {
        language: 'json' as const,
        icon: ThirdBracketIcon,
        label: 'JSON',
        code: `{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Missing Authorization header"
  }
}`,
      },
    ],
    [],
  )
  const languages = useMemo<
    Array<{
      language: BundledLanguage
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
  method: 'POST',
  headers: {
    Authorization: 'Bearer <api_key>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Website feedback' }),
})

const project = await response.json()`,
      },
      {
        language: 'python' as const,
        icon: PythonIcon,
        label: 'Python',
        code: `import requests

response = requests.post(
    '${baseUrl}/organizations/{orgId}/projects',
    headers={
        'Authorization': 'Bearer <api_key>',
        'Content-Type': 'application/json',
    },
    json={'title': 'Website feedback'},
)

project = response.json()`,
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
      'method' => 'POST',
      'header' => "Authorization: Bearer <api_key>\r\n" .
        "Content-Type: application/json\r\n",
      'content' => json_encode(['title' => 'Website feedback']),
    ],
  ]),
);

$project = json_decode($response, true);`,
      },
      {
        language: 'ruby' as const,
        icon: Diamond02Icon,
        label: 'Ruby',
        code: `require 'net/http'
require 'json'

uri = URI('${baseUrl}/organizations/{orgId}/projects')
request = Net::HTTP::Post.new(uri)
request['Authorization'] = 'Bearer <api_key>'
request['Content-Type'] = 'application/json'
request.body = { title: 'Website feedback' }.to_json

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

project = JSON.parse(response.body)`,
      },
      {
        language: 'shell' as const,
        icon: ComputerTerminal01Icon,
        label: 'Curl',
        code: `curl -X POST ${baseUrl}/organizations/{orgId}/projects \\
  -H "Authorization: Bearer <api_key>" \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Website feedback"}'`,
      },
    ],
    [baseUrl],
  )

  return (
    <div>
      <DocsNav currentPage={title} />

      <article>
        <h1 className="mt-10">{title}</h1>

        <p>
          The {config.productName} API lets you automate feedback collection and
          management from your own tools. Use it to manage projects, look up and
          update organizations, and post feedback without relying on the UI.
        </p>

        <p>
          Send requests to <code>{baseUrl}</code>. Requests with a body must use
          JSON and include <code>Content-Type: application/json</code>. We
          version the API in the URL to keep your integrations stable as we
          evolve.
        </p>

        <p>
          Authenticate protected endpoints with a bearer token using the{' '}
          <code>Authorization</code> header. Generate API keys in your
          organization settings, then share them securely with the systems that
          need to call the API. Public feedback submissions do not require
          authentication.
        </p>

        <div className="not-prose pt-2">
          <CodeBlock languages={languages} defaultLanguage="typescript" />
        </div>

        <section className="mt-12">
          <h2>Error responses</h2>
          <p>
            Validation and authentication errors follow a consistent format with
            <code>success: false</code> and an <code>error</code> object.
          </p>

          <div className="not-prose mt-3">
            <CodeBlock languages={errorLanguages} defaultLanguage="json" />
          </div>
        </section>

        <div className="flex justify-end mt-10 not-prose">
          <Button asChild variant="outline">
            <Link to="/docs/api/auth">
              Authentication <HugeiconsIcon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
