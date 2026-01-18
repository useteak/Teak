import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberIncludeObjectSchema as ProjectMemberIncludeObjectSchema } from './objects/ProjectMemberInclude.schema';
import { ProjectMemberOrderByWithRelationInputObjectSchema as ProjectMemberOrderByWithRelationInputObjectSchema } from './objects/ProjectMemberOrderByWithRelationInput.schema';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './objects/ProjectMemberWhereInput.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './objects/ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberScalarFieldEnumSchema } from './enums/ProjectMemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectMemberFindManySelectSchema: z.ZodType<Prisma.ProjectMemberSelect> = z.object({
    id: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    notifyOnFeedback: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectMemberSelect>;

export const ProjectMemberFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    notifyOnFeedback: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ProjectMemberFindManySchema: z.ZodType<Prisma.ProjectMemberFindManyArgs> = z.object({ select: ProjectMemberFindManySelectSchema.optional(), include: z.lazy(() => ProjectMemberIncludeObjectSchema.optional()), orderBy: z.union([ProjectMemberOrderByWithRelationInputObjectSchema, ProjectMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectMemberWhereInputObjectSchema.optional(), cursor: ProjectMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectMemberScalarFieldEnumSchema, ProjectMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberFindManyArgs>;

export const ProjectMemberFindManyZodSchema = z.object({ select: ProjectMemberFindManySelectSchema.optional(), include: z.lazy(() => ProjectMemberIncludeObjectSchema.optional()), orderBy: z.union([ProjectMemberOrderByWithRelationInputObjectSchema, ProjectMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectMemberWhereInputObjectSchema.optional(), cursor: ProjectMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectMemberScalarFieldEnumSchema, ProjectMemberScalarFieldEnumSchema.array()]).optional() }).strict();