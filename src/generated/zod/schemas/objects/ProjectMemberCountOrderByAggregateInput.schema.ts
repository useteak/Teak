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
export const ProjectMemberCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMemberCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCountOrderByAggregateInput>;
export const ProjectMemberCountOrderByAggregateInputObjectZodSchema = makeSchema();
