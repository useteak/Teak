import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberSelectObjectSchema as ProjectMemberSelectObjectSchema } from './objects/ProjectMemberSelect.schema';
import { ProjectMemberCreateManyInputObjectSchema as ProjectMemberCreateManyInputObjectSchema } from './objects/ProjectMemberCreateManyInput.schema';

export const ProjectMemberCreateManyAndReturnSchema: z.ZodType<Prisma.ProjectMemberCreateManyAndReturnArgs> = z.object({ select: ProjectMemberSelectObjectSchema.optional(), data: z.union([ ProjectMemberCreateManyInputObjectSchema, z.array(ProjectMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberCreateManyAndReturnArgs>;

export const ProjectMemberCreateManyAndReturnZodSchema = z.object({ select: ProjectMemberSelectObjectSchema.optional(), data: z.union([ ProjectMemberCreateManyInputObjectSchema, z.array(ProjectMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();