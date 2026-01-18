import { Link, createFileRoute } from '@tanstack/react-router'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { createServerFn } from '@tanstack/react-start'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRightIcon } from '@hugeicons/core-free-icons'
import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { config } from '@/config'
import { IntegrationCodeBlock } from '@/components/integration-code-block'

const getData = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  return {
    user: session?.user,
  }
})

export const Route = createFileRoute('/_authenticated/')({
  component: App,
  loader: () => getData(),
})

function App() {
  // Server state
  const { user } = Route.useLoaderData()

  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto p-8 xl:py-12 px-8 min-h-svh">
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          className="text-muted-foreground text-lg font-bold lowercase"
        >
          {config.productName}
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <Button variant="link" asChild>
              <Link to="/home">Go to dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant="link" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild className="font-semibold">
                <Link to="/signup">
                  Create an account
                  <HugeiconsIcon icon={ArrowRightIcon} />
                </Link>
              </Button>
            </>
          )}
        </div>
      </nav>

      <div className="flex flex-col xl:flex-row xl:items-center gap-12 flex-1 pb-[20vh]">
        <div className="space-y-6 flex-1 max-w-lg">
          <h1 className="text-5xl/tight font-bold text-balance">
            The Headless Feedback API
          </h1>
          <div className="space-y-3">
            <p className="text-balance text-lg/relaxed">
              <span className="bg-primary/10 -ml-1.5 text-primary px-1 py-0.5 rounded-sm font-medium">
                Own your customer feedback experience
              </span>
              <br />
              <span className="underline decoration-2 underline-offset-4 decoration-primary/50">
                without building the infrastructure
              </span>
              .
            </p>
            <p className="text-balance text-lg/relaxed">
              {config.productName} gives you a simple API endpoint to send
              feedback from your app.
            </p>
            <p className="text-balance text-lg/relaxed">
              And a dashboard to manage it.
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-0 h-80">
          <IntegrationCodeBlock
            organizationId="1"
            projectId="1"
            hideComments
            className="h-full"
          />
        </div>
      </div>
    </div>
  )
}
