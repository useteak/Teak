import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFeedbackTypeFilterObjectSchema as NestedEnumFeedbackTypeFilterObjectSchema } from './NestedEnumFeedbackTypeFilter.schema'

const nestedenumfeedbacktypewithaggregatesfilterSchema = z.object({
  equals: FeedbackTypeSchema.optional(),
  in: FeedbackTypeSchema.array().optional(),
  notIn: FeedbackTypeSchema.array().optional(),
  not: z.union([FeedbackTypeSchema, z.lazy(() => NestedEnumFeedbackTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFeedbackTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFeedbackTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumFeedbackTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumFeedbackTypeWithAggregatesFilter> = nestedenumfeedbacktypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumFeedbackTypeWithAggregatesFilter>;
export const NestedEnumFeedbackTypeWithAggregatesFilterObjectZodSchema = nestedenumfeedbacktypewithaggregatesfilterSchema;
