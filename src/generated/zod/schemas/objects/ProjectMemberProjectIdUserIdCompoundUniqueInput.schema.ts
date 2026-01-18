import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  projectId: z.string(),
  userId: z.string()
}).strict();
export const ProjectMemberProjectIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ProjectMemberProjectIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberProjectIdUserIdCompoundUniqueInput>;
export const ProjectMemberProjectIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
