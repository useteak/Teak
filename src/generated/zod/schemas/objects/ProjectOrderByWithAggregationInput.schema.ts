import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectCountOrderByAggregateInputObjectSchema as ProjectCountOrderByAggregateInputObjectSchema } from './ProjectCountOrderByAggregateInput.schema';
import { ProjectMaxOrderByAggregateInputObjectSchema as ProjectMaxOrderByAggregateInputObjectSchema } from './ProjectMaxOrderByAggregateInput.schema';
import { ProjectMinOrderByAggregateInputObjectSchema as ProjectMinOrderByAggregateInputObjectSchema } from './ProjectMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  rateLimitingEnabled: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProjectCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectOrderByWithAggregationInput>;
export const ProjectOrderByWithAggregationInputObjectZodSchema = makeSchema();
