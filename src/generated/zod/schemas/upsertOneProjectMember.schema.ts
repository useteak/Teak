import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './objects/ProjectMemberSelect.schema';
import { ProjectMemberIncludeObjectSchema as ProjectMemberIncludeObjectSchema } from './objects/ProjectMemberInclude.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './objects/ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberCreateInputObjectSchema as ProjectMemberCreateInputObjectSchema } from './objects/ProjectMemberCreateInput.schema';
import { ProjectMemberUncheckedCreateInputObjectSchema as ProjectMemberUncheckedCreateInputObjectSchema } from './objects/ProjectMemberUncheckedCreateInput.schema';
import { ProjectMemberUpdateInputObjectSchema as ProjectMemberUpdateInputObjectSchema } from './objects/ProjectMemberUpdateInput.schema';
import { ProjectMemberUncheckedUpdateInputObjectSchema as ProjectMemberUncheckedUpdateInputObjectSchema } from './objects/ProjectMemberUncheckedUpdateInput.schema';

export const ProjectMemberUpsertOneSchema: z.ZodType<Prisma.ProjectMemberUpsertArgs> = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), where: ProjectMemberWhereUniqueInputObjectSchema, create: z.union([ ProjectMemberCreateInputObjectSchema, ProjectMemberUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectMemberUpdateInputObjectSchema, ProjectMemberUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProjectMemberUpsertArgs>;

export const ProjectMemberUpsertOneZodSchema = z.object({ select: ProjectMemberSelectObjectSchema.optional(), include: ProjectMemberIncludeObjectSchema.optional(), where: ProjectMemberWhereUniqueInputObjectSchema, create: z.union([ ProjectMemberCreateInputObjectSchema, ProjectMemberUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectMemberUpdateInputObjectSchema, ProjectMemberUncheckedUpdateInputObjectSchema ]) }).strict();