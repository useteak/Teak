import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberUpdateManyMutationInputObjectSchema as ProjectMemberUpdateManyMutationInputObjectSchema } from './objects/ProjectMemberUpdateManyMutationInput.schema';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './objects/ProjectMemberWhereInput.schema';

export const ProjectMemberUpdateManySchema: z.ZodType<Prisma.ProjectMemberUpdateManyArgs> = z.object({ data: ProjectMemberUpdateManyMutationInputObjectSchema, where: ProjectMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberUpdateManyArgs>;

export const ProjectMemberUpdateManyZodSchema = z.object({ data: ProjectMemberUpdateManyMutationInputObjectSchema, where: ProjectMemberWhereInputObjectSchema.optional() }).strict();