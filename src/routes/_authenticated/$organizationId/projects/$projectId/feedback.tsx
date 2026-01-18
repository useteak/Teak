import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import z from 'zod'
import { format, isToday, isYesterday } from 'date-fns'
import { prisma } from '@/db'
import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { FeedbackType } from '@/generated/prisma/enums'
import { FeedbackCard } from '@/components/feedback-card'
import { Card } from '@/components/ui/card'
import { FeedbackInputSchema } from '@/generated/zod/schemas'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { HugeiconsIcon } from '@hugeicons/react'
import { SearchIcon } from '@hugeicons/core-free-icons'
import { Separator } from '@/components/ui/separator'

const createFeedback = createServerFn({ method: 'POST' })
  .inputValidator(
    FeedbackInputSchema.pick({
      projectId: true,
      description: true,
      type: true,
      email: true,
    }),
  )
  .handler(async ({ data }) => {
    await prisma.feedback.create({ data })

    return {
      success: true,
    }
  })

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

  return (
    <>
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
          <h2 className="text-sm text-muted-foreground w-28 text-right font-condensed uppercase tracking-wider font-medium mt-1">
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
