import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { NestedEnumFeedbackTypeWithAggregatesFilterObjectSchema as NestedEnumFeedbackTypeWithAggregatesFilterObjectSchema } from './NestedEnumFeedbackTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFeedbackTypeFilterObjectSchema as NestedEnumFeedbackTypeFilterObjectSchema } from './NestedEnumFeedbackTypeFilter.schema'

const makeSchema = () => z.object({
  equals: FeedbackTypeSchema.optional(),
  in: FeedbackTypeSchema.array().optional(),
  notIn: FeedbackTypeSchema.array().optional(),
  not: z.union([FeedbackTypeSchema, z.lazy(() => NestedEnumFeedbackTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFeedbackTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFeedbackTypeFilterObjectSchema).optional()
}).strict();
export const EnumFeedbackTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumFeedbackTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeedbackTypeWithAggregatesFilter>;
export const EnumFeedbackTypeWithAggregatesFilterObjectZodSchema = makeSchema();
