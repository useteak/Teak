import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './ProjectMemberSelect.schema';
import { ProjectMemberIncludeObjectSchema as ProjectMemberIncludeObjectSchema } from './ProjectMemberInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProjectMemberSelectObjectSchema).optional(),
  include: z.lazy(() => ProjectMemberIncludeObjectSchema).optional()
}).strict();
export const ProjectMemberArgsObjectSchema = makeSchema();
export const ProjectMemberArgsObjectZodSchema = makeSchema();
