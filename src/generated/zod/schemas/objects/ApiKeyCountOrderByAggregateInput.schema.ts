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
export const ApiKeyCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCountOrderByAggregateInput>;
export const ApiKeyCountOrderByAggregateInputObjectZodSchema = makeSchema();
