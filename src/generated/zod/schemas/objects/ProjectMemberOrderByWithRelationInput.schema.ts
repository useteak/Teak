import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notifyOnFeedback: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProjectMemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectMemberOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberOrderByWithRelationInput>;
export const ProjectMemberOrderByWithRelationInputObjectZodSchema = makeSchema();
