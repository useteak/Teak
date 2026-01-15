import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectIncludeObjectSchema as ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './objects/ProjectOrderByWithRelationInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';
import { ProjectScalarFieldEnumSchema } from './enums/ProjectScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProjectSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    feedbacks: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    feedbacks: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProjectFindFirstOrThrowSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> = z.object({ select: ProjectFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindFirstOrThrowArgs>;

export const ProjectFindFirstOrThrowZodSchema = z.object({ select: ProjectFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();