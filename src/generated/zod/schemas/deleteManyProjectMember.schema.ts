import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './objects/ProjectMemberWhereInput.schema';

export const ProjectMemberDeleteManySchema: z.ZodType<Prisma.ProjectMemberDeleteManyArgs> = z.object({ where: ProjectMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberDeleteManyArgs>;

export const ProjectMemberDeleteManyZodSchema = z.object({ where: ProjectMemberWhereInputObjectSchema.optional() }).strict();