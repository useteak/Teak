import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const FeedbackCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FeedbackCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCountOrderByAggregateInput>;
export const FeedbackCountOrderByAggregateInputObjectZodSchema = makeSchema();
