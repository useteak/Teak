import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

/**
 * Combines conditional class names and merges Tailwind conflicts.
 */
export function mergeClassNames(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}
