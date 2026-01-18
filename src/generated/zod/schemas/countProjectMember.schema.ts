import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ProjectMemberOrderByWithRelationInputObjectSchema as ProjectMemberOrderByWithRelationInputObjectSchema } from './objects/ProjectMemberOrderByWithRelationInput.schema';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './objects/ProjectMemberWhereInput.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './objects/ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberCountAggregateInputObjectSchema as ProjectMemberCountAggregateInputObjectSchema } from './objects/ProjectMemberCountAggregateInput.schema';

export const ProjectMemberCountSchema: z.ZodType<Prisma.ProjectMemberCountArgs> = z.object({ orderBy: z.union([ProjectMemberOrderByWithRelationInputObjectSchema, ProjectMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectMemberWhereInputObjectSchema.optional(), cursor: ProjectMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectMemberCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectMemberCountArgs>;

export const ProjectMemberCountZodSchema = z.object({ orderBy: z.union([ProjectMemberOrderByWithRelationInputObjectSchema, ProjectMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectMemberWhereInputObjectSchema.optional(), cursor: ProjectMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectMemberCountAggregateInputObjectSchema ]).optional() }).strict();