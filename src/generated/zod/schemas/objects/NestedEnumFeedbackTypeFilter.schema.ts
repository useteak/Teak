import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema'

const nestedenumfeedbacktypefilterSchema = z.object({
  equals: FeedbackTypeSchema.optional(),
  in: FeedbackTypeSchema.array().optional(),
  notIn: FeedbackTypeSchema.array().optional(),
  not: z.union([FeedbackTypeSchema, z.lazy(() => NestedEnumFeedbackTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumFeedbackTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumFeedbackTypeFilter> = nestedenumfeedbacktypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumFeedbackTypeFilter>;
export const NestedEnumFeedbackTypeFilterObjectZodSchema = nestedenumfeedbacktypefilterSchema;
