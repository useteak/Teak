import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  notifyOnFeedback: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProjectMemberMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMemberMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberMaxAggregateInputType>;
export const ProjectMemberMaxAggregateInputObjectZodSchema = makeSchema();
