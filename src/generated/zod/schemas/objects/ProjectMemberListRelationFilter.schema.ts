import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './ProjectMemberWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProjectMemberWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProjectMemberWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProjectMemberWhereInputObjectSchema).optional()
}).strict();
export const ProjectMemberListRelationFilterObjectSchema: z.ZodType<Prisma.ProjectMemberListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberListRelationFilter>;
export const ProjectMemberListRelationFilterObjectZodSchema = makeSchema();
