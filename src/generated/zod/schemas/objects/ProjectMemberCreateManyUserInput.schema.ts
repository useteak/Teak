import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  projectId: z.string(),
  notifyOnFeedback: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectMemberCreateManyUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateManyUserInput>;
export const ProjectMemberCreateManyUserInputObjectZodSchema = makeSchema();
