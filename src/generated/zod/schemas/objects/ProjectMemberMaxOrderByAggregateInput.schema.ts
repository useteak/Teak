import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notifyOnFeedback: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMemberMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberMaxOrderByAggregateInput>;
export const ProjectMemberMaxOrderByAggregateInputObjectZodSchema = makeSchema();
