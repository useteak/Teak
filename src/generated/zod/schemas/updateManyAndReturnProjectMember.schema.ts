import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './objects/ProjectMemberSelect.schema';
import { ProjectMemberUpdateManyMutationInputObjectSchema as ProjectMemberUpdateManyMutationInputObjectSchema } from './objects/ProjectMemberUpdateManyMutationInput.schema';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './objects/ProjectMemberWhereInput.schema';

export const ProjectMemberUpdateManyAndReturnSchema: z.ZodType<Prisma.ProjectMemberUpdateManyAndReturnArgs> = z.object({ select: ProjectMemberSelectObjectSchema.optional(), data: ProjectMemberUpdateManyMutationInputObjectSchema, where: ProjectMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberUpdateManyAndReturnArgs>;

export const ProjectMemberUpdateManyAndReturnZodSchema = z.object({ select: ProjectMemberSelectObjectSchema.optional(), data: ProjectMemberUpdateManyMutationInputObjectSchema, where: ProjectMemberWhereInputObjectSchema.optional() }).strict();