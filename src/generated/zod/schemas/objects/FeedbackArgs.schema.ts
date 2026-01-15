import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './FeedbackSelect.schema';
import { FeedbackIncludeObjectSchema as FeedbackIncludeObjectSchema } from './FeedbackInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FeedbackSelectObjectSchema).optional(),
  include: z.lazy(() => FeedbackIncludeObjectSchema).optional()
}).strict();
export const FeedbackArgsObjectSchema = makeSchema();
export const FeedbackArgsObjectZodSchema = makeSchema();
