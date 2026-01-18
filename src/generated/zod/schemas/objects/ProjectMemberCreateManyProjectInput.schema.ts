import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  notifyOnFeedback: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectMemberCreateManyProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateManyProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateManyProjectInput>;
export const ProjectMemberCreateManyProjectInputObjectZodSchema = makeSchema();
