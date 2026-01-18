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
export const ProjectMemberMinAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMemberMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberMinAggregateInputType>;
export const ProjectMemberMinAggregateInputObjectZodSchema = makeSchema();
