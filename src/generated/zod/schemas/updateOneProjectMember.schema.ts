import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './objects/ProjectMemberSelect.schema';
import { ProjectMemberIncludeObjectSchema as ProjectMemberIncludeObjectSchema } from './objects/ProjectMemberInclude.schema';
import { ProjectMemberUpdateInputObjectSchema as ProjectMemberUpdateInputObjectSchema } from './objects/ProjectMemberUpdateInput.schema';
import { ProjectMemberUncheckedUpdateInputObjectSchema as ProjectMemberUncheckedUpdateInputObjectSchema } from './objects/ProjectMemberUncheckedUpdateInput.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './objects/ProjectMemberWhereUniqueInput.schema';

export const ProjectMemberUpdateOneSchema: z.ZodType<Prisma.ProjectMemberUpdateArgs> = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), data: z.union([ProjectMemberUpdateInputObjectSchema, ProjectMemberUncheckedUpdateInputObjectSchema]), where: ProjectMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectMemberUpdateArgs>;

export const ProjectMemberUpdateOneZodSchema = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), data: z.union([ProjectMemberUpdateInputObjectSchema, ProjectMemberUncheckedUpdateInputObjectSchema]), where: ProjectMemberWhereUniqueInputObjectSchema }).strict();