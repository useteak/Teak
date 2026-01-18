import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectMemberCountOrderByAggregateInputObjectSchema as ProjectMemberCountOrderByAggregateInputObjectSchema } from './ProjectMemberCountOrderByAggregateInput.schema';
import { ProjectMemberMaxOrderByAggregateInputObjectSchema as ProjectMemberMaxOrderByAggregateInputObjectSchema } from './ProjectMemberMaxOrderByAggregateInput.schema';
import { ProjectMemberMinOrderByAggregateInputObjectSchema as ProjectMemberMinOrderByAggregateInputObjectSchema } from './ProjectMemberMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notifyOnFeedback: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProjectMemberCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectMemberMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectMemberMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectMemberOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectMemberOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberOrderByWithAggregationInput>;
export const ProjectMemberOrderByWithAggregationInputObjectZodSchema = makeSchema();
