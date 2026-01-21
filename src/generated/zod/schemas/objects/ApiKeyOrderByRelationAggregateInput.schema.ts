import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ApiKeyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyOrderByRelationAggregateInput>;
export const ApiKeyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
