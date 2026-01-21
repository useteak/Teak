import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ApiKeyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyMaxOrderByAggregateInput>;
export const ApiKeyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
