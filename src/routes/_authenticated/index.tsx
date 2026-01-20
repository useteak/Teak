import { Link, createFileRoute } from '@tanstack/react-router'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { createServerFn } from '@tanstack/react-start'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight02Icon,
  ArrowRightIcon,
  Tick02Icon,
} from '@hugeicons/core-free-icons'
import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { config } from '@/config'
import { IntegrationCodeBlock } from '@/components/integration-code-block'
import { createSeoMeta } from '@/lib/seo'
import { AppLogo } from '@/components/app-logo'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
  head: () => ({
    meta: createSeoMeta(),
  }),
})

function App() {
  // Server state
  const { user } = Route.useLoaderData()

  return (
    <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto p-8 xl:py-12 px-8 min-h-svh">
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          className="text-muted-foreground text-lg font-bold lowercase"
        >
          <AppLogo imageClassName="h-6" withLink={false} />
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <Button size="lg" variant="link" asChild>
              <Link to="/home">Go to dashboard</Link>
            </Button>
          ) : (
            <>
              <Button size="lg" variant="link" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="lg" asChild className="font-semibold">
                <Link to="/signup">Create an account</Link>
              </Button>
            </>
          )}
        </div>
      </nav>

      <header className="mt-16">
        <h1 className="text-5xl/tight font-medium text-balance">
          Customer feedback experiences without the infrastructure
        </h1>

        <p className="mt-8 text-balance text-xl/relaxed text-muted-foreground-secondary">
          Build your customer feedback experience without managing the
          infrastructure. We provide an API endpoint and a beautiful dashboard
          for you and your team.
        </p>

        <IntegrationCodeBlock
          organizationId="1"
          projectId="1"
          hideComments
          className="mt-12"
        />

        <Button
          size="lg"
          asChild
          variant="link"
          className="text-foreground px-0 mt-6 hover:underline underline-offset-4 decoration-primary/50"
        >
          <Link to="/signup">
            Get your API key{' '}
            <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" />
          </Link>
        </Button>
      </header>

      {/* <div className="space-y-10">
        <div className='space-y-4'>

          <h2 className="text-2xl font-medium mt-6">Pricing</h2>

          <p className="text-muted-foreground-secondary text-balance leading-relaxed">
            We want to keep pricing simple. If you're running a open source
            project, or you're just getting off the ground as a solo founder, the
            bill's on us.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardDescription>OSS & Solo Founders</CardDescription>
              <CardTitle className="text-2xl">Free</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full" variant="secondary">
                <Link to="/signup">Get started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Teams</CardDescription>
              <CardTitle className="text-2xl">$7/month</CardTitle>
              <CardDescription>Per member</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-inside">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    className="size-4 text-foreground-primary"
                  />{' '}
                  No credit card required
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    className="size-4 text-foreground-primary"
                  />{' '}
                  14 day free trial
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    className="size-4 text-foreground-primary"
                  />{' '}
                  Cancel anytime
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/signup">Sign up</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Enterprise</CardDescription>
              <CardTitle className="text-2xl">Custom</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full" variant="secondary">
                <Link to="/signup">Get in touch</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div> */}
    </div>
  )
}
