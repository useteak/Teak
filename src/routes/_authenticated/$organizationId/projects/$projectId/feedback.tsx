import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import z from 'zod'
import { format, isToday, isYesterday } from 'date-fns'
import { HugeiconsIcon } from '@hugeicons/react'
import { MessageIcon } from '@hugeicons/core-free-icons'
import { prisma } from '@/lib/database'
import { auth } from '@/lib/auth'
import { formatFeedbackType, getFeedbackTypeIcon } from '@/lib/format'
import { FeedbackCard } from '@/components/feedback-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { IntegrationCodeBlock } from '@/components/integration-code-block'
import { Spinner } from '@/components/ui/spinner'
import { FeedbackType } from '@/generated/prisma/enums'
import { cn } from '@/utils/classnames'

const getData = createServerFn()
  .inputValidator(z.object({ projectId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const project = await prisma.project.findUnique({
      where: {
        id: data.projectId,
        organization: {
          users: {
            some: {
              id: session?.user.id,
            },
          },
        },
      },
    })

    const feedback = await prisma.feedback.findMany({
      where: {
        projectId: project?.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return {
      feedback,
      project,
    }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/projects/$projectId/feedback',
)({
  component: RouteComponent,
  loader: ({ params }) => getData({ data: { projectId: params.projectId } }),
})

function RouteComponent() {
  // Server state
  const { feedback } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()

  if (feedback.length === 0) {
    return (
      <div className="flex flex-col">
        <Empty className="p-6">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <HugeiconsIcon icon={MessageIcon} />
            </EmptyMedia>
            <EmptyTitle>No feedback yet</EmptyTitle>
            <EmptyDescription>
              Waiting for the first feedback entry...
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Spinner className="size-6 text-muted-foreground" />
          </EmptyContent>
        </Empty>

        <IntegrationCodeBlock
          organizationId={params.organizationId}
          projectId={params.projectId}
          defaultLanguage="shell"
          hideComments
        />
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {Object.values(FeedbackType).map((feedbackType) => {
          const icon = getFeedbackTypeIcon(feedbackType)
          const feedbackCount = feedback.filter(
            (f) => f.type === feedbackType,
          ).length

          if (!feedbackCount) {
            return <Card key={feedbackType} className="opacity-50 h-23.5" />
          }

          return (
            <Card key={feedbackType} size="sm">
              <CardHeader className="flex flex-col justify-between h-full gap-3">
                <p className="text-sm font-medium text-muted-foreground -mt-0.5">
                  {formatFeedbackType(feedbackType, true)}
                </p>

                <div className="flex items-center gap-2.5">
                  <HugeiconsIcon
                    icon={icon.component}
                    strokeWidth={1}
                    className={cn('size-7', icon.className)}
                  />
                  <CardTitle className="group-data-[size=sm]/card:text-3xl tabular-nums leading-none">
                    {feedbackCount.toLocaleString()}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {Object.entries(
        Object.groupBy(feedback, (f) =>
          isToday(f.createdAt)
            ? 'Today'
            : isYesterday(f.createdAt)
              ? 'Yesterday'
              : format(f.createdAt, 'EEE, MMM d'),
        ),
      ).map(([day, entries]) => (
        <div key={day} className="flex items-start gap-8">
          <h2 className="text-sm text-muted-foreground w-24 text-right font-medium mt-1">
            {day}
          </h2>

          <Card
            size="sm"
            className="w-full divide-y dark:divide-background data-[size=sm]:gap-0 data-[size=sm]:py-0"
          >
            {entries?.map((f) => (
              <FeedbackCard key={f.id} feedback={f} />
            ))}
          </Card>
        </div>
      ))}
    </>
  )
}
