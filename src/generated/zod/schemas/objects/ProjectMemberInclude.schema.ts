import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ProjectMemberIncludeObjectSchema: z.ZodType<Prisma.ProjectMemberInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberInclude>;
export const ProjectMemberIncludeObjectZodSchema = makeSchema();
