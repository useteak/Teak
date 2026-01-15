import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { NestedEnumFeedbackTypeFilterObjectSchema as NestedEnumFeedbackTypeFilterObjectSchema } from './NestedEnumFeedbackTypeFilter.schema'

const makeSchema = () => z.object({
  equals: FeedbackTypeSchema.optional(),
  in: FeedbackTypeSchema.array().optional(),
  notIn: FeedbackTypeSchema.array().optional(),
  not: z.union([FeedbackTypeSchema, z.lazy(() => NestedEnumFeedbackTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumFeedbackTypeFilterObjectSchema: z.ZodType<Prisma.EnumFeedbackTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeedbackTypeFilter>;
export const EnumFeedbackTypeFilterObjectZodSchema = makeSchema();
