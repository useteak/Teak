import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const FeedbackMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FeedbackMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackMaxOrderByAggregateInput>;
export const FeedbackMaxOrderByAggregateInputObjectZodSchema = makeSchema();
