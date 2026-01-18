import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FeedbackCountOrderByAggregateInputObjectSchema as FeedbackCountOrderByAggregateInputObjectSchema } from './FeedbackCountOrderByAggregateInput.schema';
import { FeedbackMaxOrderByAggregateInputObjectSchema as FeedbackMaxOrderByAggregateInputObjectSchema } from './FeedbackMaxOrderByAggregateInput.schema';
import { FeedbackMinOrderByAggregateInputObjectSchema as FeedbackMinOrderByAggregateInputObjectSchema } from './FeedbackMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FeedbackCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FeedbackMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FeedbackMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FeedbackOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FeedbackOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackOrderByWithAggregationInput>;
export const FeedbackOrderByWithAggregationInputObjectZodSchema = makeSchema();
