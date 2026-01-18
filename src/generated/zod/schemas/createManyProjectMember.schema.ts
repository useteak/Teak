import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberCreateManyInputObjectSchema as ProjectMemberCreateManyInputObjectSchema } from './objects/ProjectMemberCreateManyInput.schema';

export const ProjectMemberCreateManySchema: z.ZodType<Prisma.ProjectMemberCreateManyArgs> = z.object({ data: z.union([ ProjectMemberCreateManyInputObjectSchema, z.array(ProjectMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberCreateManyArgs>;

export const ProjectMemberCreateManyZodSchema = z.object({ data: z.union([ ProjectMemberCreateManyInputObjectSchema, z.array(ProjectMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();