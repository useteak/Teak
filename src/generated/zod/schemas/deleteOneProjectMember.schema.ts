import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './objects/ProjectMemberSelect.schema';
import { ProjectMemberIncludeObjectSchema as ProjectMemberIncludeObjectSchema } from './objects/ProjectMemberInclude.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './objects/ProjectMemberWhereUniqueInput.schema';

export const ProjectMemberDeleteOneSchema: z.ZodType<Prisma.ProjectMemberDeleteArgs> = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), where: ProjectMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectMemberDeleteArgs>;

export const ProjectMemberDeleteOneZodSchema = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), where: ProjectMemberWhereUniqueInputObjectSchema }).strict();