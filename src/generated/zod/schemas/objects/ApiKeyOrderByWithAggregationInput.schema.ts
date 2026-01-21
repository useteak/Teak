import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ApiKeyCountOrderByAggregateInputObjectSchema as ApiKeyCountOrderByAggregateInputObjectSchema } from './ApiKeyCountOrderByAggregateInput.schema';
import { ApiKeyMaxOrderByAggregateInputObjectSchema as ApiKeyMaxOrderByAggregateInputObjectSchema } from './ApiKeyMaxOrderByAggregateInput.schema';
import { ApiKeyMinOrderByAggregateInputObjectSchema as ApiKeyMinOrderByAggregateInputObjectSchema } from './ApiKeyMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ApiKeyCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ApiKeyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ApiKeyMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ApiKeyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ApiKeyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyOrderByWithAggregationInput>;
export const ApiKeyOrderByWithAggregationInputObjectZodSchema = makeSchema();
