import { format } from 'date-fns'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  BugIcon,
  ChartIncreaseIcon,
  ChatQuestionIcon,
  Lightbulb,
  MessageIcon,
  PartyIcon,
} from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import type { Feedback } from '@/generated/prisma/client'
import { FeedbackType } from '@/generated/prisma/enums'

export const columns: Array<
  ColumnDef<Feedback & { organizationId: string; projectId: string }>
> = [
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      switch (row.original.type) {
        case FeedbackType.BUG:
          return (
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={BugIcon}
                className="size-4 text-destructive"
              />
              <span className="text-destructive whitespace-nowrap">Bug</span>
            </div>
          )
        case FeedbackType.FEATURE_REQUEST:
          return (
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={Lightbulb}
                className="size-4 text-amber-500"
              />
              <span className="text-amber-500 whitespace-nowrap">
                Feature Request
              </span>
            </div>
          )
        case FeedbackType.IMPROVEMENT:
          return (
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                className="size-4 text-indigo-500 dark:text-indigo-300"
              />
              <span className="text-indigo-500 dark:text-indigo-300 whitespace-nowrap">
                Improvement
              </span>
            </div>
          )
        case FeedbackType.PRAISE:
          return (
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={PartyIcon}
                className="size-4 text-foreground-primary"
              />
              <span className="text-foreground-primary whitespace-nowrap">
                Praise
              </span>
            </div>
          )
        case FeedbackType.QUESTION:
          return (
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={ChatQuestionIcon}
                className="size-4 text-lime-500 dark:text-lime-300"
              />
              <span className="text-lime-500 dark:text-lime-300 whitespace-nowrap">
                Question
              </span>
            </div>
          )
        case FeedbackType.OTHER:
          return (
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={MessageIcon}
                className="size-4 text-muted-foreground"
              />
              <span className="text-muted-foreground whitespace-nowrap">
                Feedback
              </span>
            </div>
          )
      }
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      return (
        <Link
          to="/$organizationId/projects/$projectId/feedback"
          params={{
            organizationId: row.original.organizationId,
            projectId: row.original.projectId,
          }}
          className="line-clamp-1 hover:underline"
        >
          {row.original.description}
        </Link>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: () => <div className="text-right">Created At</div>,
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground whitespace-nowrap text-right">
          {format(row.original.createdAt, 'PPp')}
        </div>
      )
    },
  },
]
