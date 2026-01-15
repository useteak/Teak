import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMinOrderByAggregateInput>;
export const ProjectMinOrderByAggregateInputObjectZodSchema = makeSchema();
