import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackOrderByWithRelationInputObjectSchema as FeedbackOrderByWithRelationInputObjectSchema } from './objects/FeedbackOrderByWithRelationInput.schema';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './objects/FeedbackWhereInput.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './objects/FeedbackWhereUniqueInput.schema';
import { FeedbackCountAggregateInputObjectSchema as FeedbackCountAggregateInputObjectSchema } from './objects/FeedbackCountAggregateInput.schema';

export const FeedbackCountSchema: z.ZodType<Prisma.FeedbackCountArgs> = z.object({ orderBy: z.union([FeedbackOrderByWithRelationInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedbackWhereInputObjectSchema.optional(), cursor: FeedbackWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FeedbackCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackCountArgs>;

export const FeedbackCountZodSchema = z.object({ orderBy: z.union([FeedbackOrderByWithRelationInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedbackWhereInputObjectSchema.optional(), cursor: FeedbackWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FeedbackCountAggregateInputObjectSchema ]).optional() }).strict();