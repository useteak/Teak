import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './objects/ProjectMemberSelect.schema';
import { ProjectMemberIncludeObjectSchema as ProjectMemberIncludeObjectSchema } from './objects/ProjectMemberInclude.schema';
import { ProjectMemberCreateInputObjectSchema as ProjectMemberCreateInputObjectSchema } from './objects/ProjectMemberCreateInput.schema';
import { ProjectMemberUncheckedCreateInputObjectSchema as ProjectMemberUncheckedCreateInputObjectSchema } from './objects/ProjectMemberUncheckedCreateInput.schema';

export const ProjectMemberCreateOneSchema: z.ZodType<Prisma.ProjectMemberCreateArgs> = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), data: z.union([ProjectMemberCreateInputObjectSchema, ProjectMemberUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProjectMemberCreateArgs>;

export const ProjectMemberCreateOneZodSchema = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), data: z.union([ProjectMemberCreateInputObjectSchema, ProjectMemberUncheckedCreateInputObjectSchema]) }).strict();