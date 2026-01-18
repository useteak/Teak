import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  notifyOnFeedback: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ProjectMemberSelectObjectSchema: z.ZodType<Prisma.ProjectMemberSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberSelect>;
export const ProjectMemberSelectObjectZodSchema = makeSchema();
