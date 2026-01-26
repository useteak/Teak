import { Link, createFileRoute } from '@tanstack/react-router'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { createServerFn } from '@tanstack/react-start'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ApiIcon,
  ArrowUpRightIcon,
  Attachment01Icon,
  Cancel01Icon,
  CursorIcon,
  MessageIcon,
} from '@hugeicons/core-free-icons'
import { toast } from 'sonner'
import { useState } from 'react'
import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { createSeoMeta } from '@/lib/seo'
import { AppLogo } from '@/components/app-logo'
import { Card } from '@/components/ui/card'
import { IntegrationCodeBlock } from '@/components/integration-code-block'
import { config } from '@/config'
import { FeedbackCard } from '@/components/feedback-card'
import { FeedbackType } from '@/generated/prisma/enums'
import { cn } from '@/utils/classnames'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserAccountDropdownContent } from '@/components/user-account-dropdown-content'

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
    <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto p-8 xl:pt-12 xl:pb-32 px-8 xl:px-12 min-h-svh">
      <nav className="flex items-center justify-between">
        <AppLogo imageClassName="h-6" href="/" />

        <div className="flex items-center gap-2">
          <Button size="lg" variant="link" asChild>
            <Link to="/docs">Documentation</Link>
          </Button>

          {user ? (
            <>
              <Button size="lg" variant="link" asChild>
                <Link to="/home">Dashboard</Link>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer rounded focus:outline-none focus:ring-0">
                    <Avatar>
                      <AvatarImage src={user.image ?? undefined} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <UserAccountDropdownContent />
              </DropdownMenu>
            </>
          ) : (
            <div className="flex gap-3">
              <Button size="lg" variant="link" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="lg" asChild>
                <Link to="/signup">Create an account</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      <header className="mt-16">
        <h1 className="text-5xl/tight font-medium text-balance font-serif">
          Customer feedback experiences without the infrastructure
        </h1>

        <p className="mt-8 text-balance text-xl/relaxed text-muted-foreground-secondary">
          Build your customer feedback experience without managing the
          infrastructure. We provide an API endpoint and a beautiful dashboard
          for you and your team.
        </p>

        <div className="flex flex-col gap-2 items-center">
          <IntegrationCodeBlock
            organizationId="1"
            projectId="1"
            hideComments
            className="mt-12"
          />

          <div className="relative h-14 w-px overflow-hidden mt-2">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_6px,transparent_6px,transparent_12px)] bg-size-[1px_12px] animate-[dash-down_0.6s_linear_infinite]" />
          </div>

          <div className="w-full relative mt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card
                key={i}
                size="sm"
                className={cn(
                  'w-full divide-y dark:divide-background data-[size=sm]:gap-0 data-[size=sm]:py-0 -mt-2',
                  i && 'absolute top-0',
                  i === 0 && 'scale-90',
                  i === 1 && 'scale-95',
                )}
                style={{
                  transform: `translateY(${i * 15}%)`,
                }}
              >
                <FeedbackCard
                  withBorder
                  feedback={{
                    id: '1',
                    description:
                      'I would really love to be able to copy this page as markdown.',
                    type:
                      i === 0
                        ? FeedbackType.OTHER
                        : i === 1
                          ? FeedbackType.IMPROVEMENT
                          : FeedbackType.FEATURE_REQUEST,
                    email: 'janedoe@myspace.com',
                    metadata: {},
                    projectId: '1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  }}
                />
              </Card>
            ))}
          </div>
        </div>
      </header>

      <Separator className="mb-12 mt-20" />

      <section className="space-y-12">
        <div className="space-y-5">
          <h2 className="text-3xl font-medium font-serif">
            Example integrations
          </h2>

          <p className="text-muted-foreground text-balance leading-relaxed">
            Here are some example feedback UI's you can build with{' '}
            {config.productName}. Don't lock yourself into a third-party
            interface. Use the {config.productName} API to build your own custom
            feedback experience.
          </p>
        </div>

        <div className="gap-6 grid xl:grid-cols-4 xl:-mx-240 overflow-x-hidden">
          <div className="flex flex-col gap-3">
            <ExampleResend />
          </div>
          <div className="flex flex-col gap-3 h-full">
            <ExampleCursor />
          </div>
          <div className="flex flex-col gap-3 h-full">
            <ExampleClaudeCode />
          </div>
          <div className="flex flex-col gap-3">
            <ExampleLinear />
          </div>
        </div>
      </section>

      <Separator className="mb-12 mt-16" />

      <section className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-medium font-serif">
            {config.productName} works where you do
          </h2>
          <p className="text-muted-foreground text-balance leading-relaxed">
            Forward feedback to the right people, in the right places.
          </p>

          <p className="text-muted-foreground text-balance leading-relaxed">
            {config.productName} integrates with tools like Linear and Slack,
            and provides a REST API for you to build your own integrations.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 w-full xl:max-w-xl">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/linear-logo.svg"
              className="w-16 dark:invert opacity-40"
            />
            <p className="text-center text-muted-foreground text-balance">
              Linear integration coming soon
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <HugeiconsIcon icon={ApiIcon} className="size-18" />
            <p className="text-center text-balance">
              Start building with our Rest API today
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img
              src="/slack-logo.svg"
              className="w-16 dark:invert opacity-40"
            />
            <p className="text-center text-muted-foreground text-balance">
              Slack integration coming soon
            </p>
          </div>
        </div>

        <Button size="lg" asChild>
          <Link to="/docs/api/overview">Read API documentation</Link>
        </Button>
      </section>

      <Separator className="my-12" />

      <section className="space-y-8">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl">
            A beautifully simple dashboard
          </h3>
          <p className="text-lg/relaxed text-muted-foreground">
            Don't waste your time in complex overly complex customer feedback
            apps. Here, you get everything you need to know about what your
            customers are experiencing at a glance.
          </p>
        </div>

        <div className="xl:-mx-72">
          <img
            src="/dashboard.webp"
            alt={`${config.productName} dashboard`}
            className="w-full"
          />
        </div>
      </section>

      <Separator className="my-12" />

      <section>
        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <img src="/icon-white.svg" className="h-10" />
            <img src="/github-logo.svg" className="w-10 invert" />
          </div>

          <div className="space-y-9">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl">
                {config.productName} loves Open Source
              </h3>
              <p className="text-lg/relaxed text-muted-foreground">
                We believe in building in the open, and thus, we've made Teak
                open source. This means that you can go and read the source code
                for {config.productName}, and see exactly what goes on under the
                hood.
              </p>
            </div>

            <Button size="lg" asChild>
              <a
                href={config.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View code on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExampleLinear() {
  return (
    <div className="border dark:border-[#303237] divide-y dark:divide-[#303237] bg-white dark:bg-[#1c1d1f] rounded-lg shadow-xl dark:shadow-black/25 flex-1 flex flex-col">
      <div className="flex items-center justify-between pl-8 pr-6 py-4">
        <p className="font-semibold">Contact us</p>
        <HugeiconsIcon
          icon={Cancel01Icon}
          className="size-4.5 text-muted-foreground hover:text-foreground transition"
        />
      </div>

      <div className="flex flex-col gap-4 px-8 py-4 flex-1">
        <p className="dark:text-[#9c9da1] text-balance">
          Include any relevant details, or email us directly at{' '}
          <a href="#" className="text-foreground">
            support@linear.com{' '}
            <HugeiconsIcon icon={ArrowUpRightIcon} className="size-4 inline" />
          </a>
        </p>

        <textarea
          className="border rounded-md p-2.5 resize-none dark:border-[#33353b] dark:placeholder-[#626366] focus:outline-none focus:ring-0 min-h-48 xl:min-h-0 xl:flex-1"
          placeholder="How do I..."
        />

        <div className="flex items-center justify-between">
          <HugeiconsIcon
            icon={Attachment01Icon}
            className="size-4.5 text-muted-foreground hover:text-foreground transition"
          />

          <button className="rounded-[5px] h-8 px-3.5 font-medium bg-[#606acb] text-white hover:bg-[#6D78E7] transition">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

function ExampleResend() {
  return (
    <div className="dark:bg-black border rounded-lg p-4 flex flex-col gap-3 items-end h-full shadow-inner">
      <button className="flex items-center gap-1.5 text-sm font-medium h-8 pr-1.5 pl-2.5 rounded-[12px] border dark:bg-[#151619] dark:border-[#2d3034]">
        <HugeiconsIcon
          icon={MessageIcon}
          className="size-4 text-muted-foreground"
        />
        Feedback
        <kbd className="size-5 rounded-md text-sm font-medium flex items-center ml-0.5 justify-center bg-[#2d2034] dark:text-[#a1a4a5]">
          F
        </kbd>
      </button>

      <div className="p-3.5 pb-4 dark:bg-black border dark:border-[#222629] rounded-[1.5rem] w-[400px] shadow-xl shadow-black flex flex-col gap-2.5">
        <textarea
          rows={4}
          placeholder="Ideas to improve this page..."
          className="w-full text-sm focus:outline-none focus:ring-2 dark:focus:ring-[#2d3034]/50 resize-none dark:bg-[#151619] border dark:border-[#2d3034] p-3 rounded-[12px] dark:placeholder-[#444a4d]"
        />

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm dark:text-[#a1a4a5]">
            Need help?{' '}
            <a
              href="#"
              className="dark:text-[#7db8fb] hover:underline underline-offset-2"
            >
              Contact us
            </a>{' '}
            or{' '}
            <a
              href="#"
              className="dark:text-[#7db8fb] hover:underline underline-offset-2"
            >
              see docs
            </a>
            .
          </p>

          <button className="flex items-center gap-1.5 text-sm font-semibold h-8 pr-1.5 pl-3 rounded-[12px] dark:bg-white dark:text-black">
            Send
            <div className="flex items-center gap-0.5">
              <kbd className="size-5 rounded-md text-sm font-medium flex items-center ml-0.5 justify-center dark:bg-[#e5e5e5] dark:text-[#5c5c5c]">
                ⌘
              </kbd>
              <kbd className="size-5 rounded-md text-sm font-medium flex items-center ml-0.5 justify-center dark:bg-[#e5e5e5] dark:text-[#5c5c5c]">
                ⏎
              </kbd>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

function ExampleCursor() {
  return (
    <div className="border dark:border-[#272727] bg-white dark:bg-[#141414] rounded-md p-5 pt-4.5 flex flex-col gap-3.5 shadow-xl dark:shadow-black/25 flex-1">
      <div className="flex items-start justify-between">
        <p className="font-semibold">Cursor Feedback</p>
        <HugeiconsIcon
          icon={Cancel01Icon}
          className="size-[18px] text-muted-foreground hover:text-foreground transition"
        />
      </div>

      <div className="flex flex-col gap-3.5 flex-1">
        <p className="text-balance text-sm">
          Help us improve the Cursor experience by providing feedback.
        </p>

        <div className="flex flex-col gap-2.5 flex-1">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Idea', lede: "I think thid's be cool!" },
              { label: 'Small Bug', lede: 'This is off...' },
              { label: 'Urgent Bug', lede: "I can't use Cursor!" },
            ].map(({ label, lede }, i) => (
              <div
                data-active={i === 1}
                key={label}
                className="border p-2 dark:border-[#4b4b4b] dark:data-active:border-[#ebc782] rounded group/option space-y-1.5"
              >
                <div className="flex items-start justify-between">
                  <p className="group-data-active/option:text-lime-500 opacity-30 group-data-active/option:opacity-100 leading-none text-sm font-medium">
                    {label}
                  </p>
                  <p className="text-muted-foreground group-data-active/option:text-lime-500 text-xs">
                    ⌘{i + 1}
                  </p>
                </div>

                <p className="text-xs opacity-20 group-data-active/option:opacity-100 group-data-active/option:text-lime-700">
                  {lede}
                </p>
              </div>
            ))}
          </div>

          <textarea
            className="w-full border rounded px-4 py-2.5 resize-none dark:bg-[#1c1c1c] dark:border-[#272727] dark:placeholder-[#414140] focus:outline-none focus:ring-0 text-sm shadow-xs dark:shadow-black/25 min-h-48 xl:min-h-0 xl:flex-1"
            placeholder="Describe the issue..."
          />
        </div>

        <div className="flex items-center justify-end">
          <button className="rounded-[4px] h-7 px-2 font-medium dark:bg-lime-600 text-white transition shadow shadow-black group/button text-sm cursor-pointer">
            Send ⌘⏎{' '}
            <span className="opacity-75 group-hover/button:opacity-100">
              Thanks for the feedback!
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ExampleClaudeCode() {
  const [value, setValue] = useState('')
  const [hasFocused, setHasFocused] = useState(false)

  return (
    <div className="dark:bg-[#22252a] p-5 h-full font-mono text-sm leading-normal space-y-8 rounded-md">
      <div className="border dark:border-[#f19e4b] rounded-sm flex divide-x dark:divide-[#f19e4b]">
        <div className="flex-1 relative flex flex-col items-center justify-center gap-4 px-8 pt-8 pb-3">
          <p className="dark:text-[#f19e4b] bg-[#22252a] px-2 absolute top-0 left-5 -translate-y-1/2">
            Claude Code <span className="dark:text-[#999999]">v2.1.14</span>
          </p>

          <p className="text-center dark:text-[#acb2b2]">Welcome back Jane!</p>

          <img src="/cc-mascot.png" className="w-20" />

          <p className="text-center dark:text-[#999999]">
            Opus 4.5 · Claude Pro · janedoe@myspace.com
          </p>
        </div>
        <div className="flex-1 flex flex-col divide-y dark:divide-[#f19e4b] ">
          <div className="p-3 flex-1 space-y-1.5">
            <p className="dark:text-[#f19e4b] font-medium">
              Tips for getting started
            </p>
            <p className="dark:text-[#acb2b2]">
              Run /init to create a CLAUDE.md file with instructions for Claude
            </p>
          </div>
          <div className="p-3 flex-1 space-y-1.5">
            <p className="dark:text-[#f19e4b] font-medium">Recent activity</p>
            <p className="dark:text-[#999999]">No recent activity</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="dark:bg-[#373737] px-2 py-1 -mx-5 w-fit">
            <p>
              <span className="dark:text-[#505050] font-bold">〉</span>{' '}
              /feedback
            </p>
          </div>

          <div className="border dark:border-[#a4cbfa] rounded-sm dark:divide-[#f19e4b] p-3 space-y-4 relative">
            <p className="dark:text-[#a4cbfa]">Submit Feedback / Bug Report</p>

            <p className="dark:text-[#acb2b2]">Describe the issue below:</p>

            <div className="relative">
              <textarea
                rows={2}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                onFocus={() => setHasFocused(true)}
                className="w-full focus:outline-none focus:ring-0 resize-none placeholder-gray-600"
                placeholder="The plan mode is not..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (value) {
                      e.preventDefault()

                      fetch(
                        `${config.productUrl}/api/v1/cmklrlrw400000ap937t15c3n/projects/cmklrn3pi00010ap98krpl2tk/feedback`,
                        {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            // Required fields
                            description: value,
                            type: 'FEATURE_REQUEST', // Options: 'BUG' | 'FEATURE_REQUEST' | 'IMPROVEMENT' | 'QUESTION' | 'PRAISE' | 'OTHER'

                            // Optional fields
                            email: 'janedoe@myspace.com', // Contact email for follow-up
                            metadata: { page: 'Hosting · Docs' }, // Any additional JSON data
                          }),
                        },
                      )
                        .then(async (res) => {
                          if (res.ok) {
                            toast.success('Feedback submitted')
                            setValue('')
                          } else {
                            toast.error('Failed to submit feedback')
                          }

                          return res.json()
                        })
                        .catch((err) => {
                          console.error(err)
                          toast.error('Failed to submit feedback')
                        })
                    }
                  }
                }}
              />

              <HugeiconsIcon
                icon={CursorIcon}
                className={cn(
                  'size-10 absolute -rotate-12 top-6 left-1/3 pointer-events-none fill-black animate-bounce transition',
                  hasFocused ? 'opacity-0' : 'opacity-100',
                )}
              />
            </div>
          </div>
        </div>

        <p className="dark:text-[#999999]">Enter to continue · Esc to cancel</p>
      </div>
    </div>
  )
}
