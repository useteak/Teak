import {
  BugIcon,
  ChartIncreaseIcon,
  ChatQuestionIcon,
  Lightbulb,
  PartyIcon,
  TriangleDashIcon,
} from '@hugeicons/core-free-icons'
import type { FeedbackType } from '@/generated/prisma/client'

/**
 * Formats the feedback type for display.
 * @param type - The feedback type enum value
 * @param plural - Whether to return the plural form
 * @returns Formatted display string
 */
export function formatFeedbackType(
  type: FeedbackType,
  plural?: boolean,
): string {
  switch (type) {
    case 'BUG':
      return plural ? 'Bug reports' : 'Bug report'
    case 'FEATURE_REQUEST':
      return plural ? 'Feature requests' : 'Feature request'
    case 'IMPROVEMENT':
      return plural ? 'Ideas for improvement' : 'Improvement idea'
    case 'QUESTION':
      return 'Questions'
    case 'PRAISE':
      return 'Praise'
    case 'OTHER':
      return 'Other'
    default:
      return type
  }
}

export interface FeedbackTypeIcon {
  component: typeof BugIcon
  className: string
  edgeClassName: string
}

/**
 * Returns icon configuration for a feedback type.
 * @param type - The feedback type enum value
 * @returns Icon component and styling classes
 */
export function getFeedbackTypeIcon(type: FeedbackType): FeedbackTypeIcon {
  switch (type) {
    case 'BUG':
      return {
        component: BugIcon,
        className: 'text-destructive',
        edgeClassName: 'border-l-destructive',
      }
    case 'FEATURE_REQUEST':
      return {
        component: Lightbulb,
        className: 'text-amber-600 dark:text-amber-500',
        edgeClassName: 'border-l-amber-500',
      }
    case 'IMPROVEMENT':
      return {
        component: ChartIncreaseIcon,
        className: 'text-indigo-500 dark:text-indigo-300',
        edgeClassName: 'border-l-indigo-500 dark:border-l-indigo-300',
      }
    case 'QUESTION':
      return {
        component: ChatQuestionIcon,
        className: 'text-lime-500 dark:text-lime-300',
        edgeClassName: 'border-l-lime-500 dark:border-l-lime-300',
      }
    case 'PRAISE':
      return {
        component: PartyIcon,
        className: 'text-foreground-primary',
        edgeClassName: 'border-l-foreground-primary',
      }
    case 'OTHER':
      return {
        component: TriangleDashIcon,
        className: 'text-muted-foreground',
        edgeClassName: 'border-l-muted-foreground',
      }
  }
}
