import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackIncludeObjectSchema as FeedbackIncludeObjectSchema } from './objects/FeedbackInclude.schema';
import { FeedbackOrderByWithRelationInputObjectSchema as FeedbackOrderByWithRelationInputObjectSchema } from './objects/FeedbackOrderByWithRelationInput.schema';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './objects/FeedbackWhereInput.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './objects/FeedbackWhereUniqueInput.schema';
import { FeedbackScalarFieldEnumSchema } from './enums/FeedbackScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FeedbackFindManySelectSchema: z.ZodType<Prisma.FeedbackSelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    email: z.boolean().optional(),
    metadata: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FeedbackSelect>;

export const FeedbackFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    email: z.boolean().optional(),
    metadata: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const FeedbackFindManySchema: z.ZodType<Prisma.FeedbackFindManyArgs> = z.object({ select: FeedbackFindManySelectSchema.optional(), include: z.lazy(() => FeedbackIncludeObjectSchema.optional()), orderBy: z.union([FeedbackOrderByWithRelationInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedbackWhereInputObjectSchema.optional(), cursor: FeedbackWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FeedbackScalarFieldEnumSchema, FeedbackScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackFindManyArgs>;

export const FeedbackFindManyZodSchema = z.object({ select: FeedbackFindManySelectSchema.optional(), include: z.lazy(() => FeedbackIncludeObjectSchema.optional()), orderBy: z.union([FeedbackOrderByWithRelationInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedbackWhereInputObjectSchema.optional(), cursor: FeedbackWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FeedbackScalarFieldEnumSchema, FeedbackScalarFieldEnumSchema.array()]).optional() }).strict();