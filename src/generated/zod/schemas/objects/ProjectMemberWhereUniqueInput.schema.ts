import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberProjectIdUserIdCompoundUniqueInputObjectSchema as ProjectMemberProjectIdUserIdCompoundUniqueInputObjectSchema } from './ProjectMemberProjectIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  projectId_userId: z.lazy(() => ProjectMemberProjectIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ProjectMemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProjectMemberWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberWhereUniqueInput>;
export const ProjectMemberWhereUniqueInputObjectZodSchema = makeSchema();
