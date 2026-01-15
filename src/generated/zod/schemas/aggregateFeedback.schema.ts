import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackOrderByWithRelationInputObjectSchema as FeedbackOrderByWithRelationInputObjectSchema } from './objects/FeedbackOrderByWithRelationInput.schema';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './objects/FeedbackWhereInput.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './objects/FeedbackWhereUniqueInput.schema';
import { FeedbackCountAggregateInputObjectSchema as FeedbackCountAggregateInputObjectSchema } from './objects/FeedbackCountAggregateInput.schema';
import { FeedbackMinAggregateInputObjectSchema as FeedbackMinAggregateInputObjectSchema } from './objects/FeedbackMinAggregateInput.schema';
import { FeedbackMaxAggregateInputObjectSchema as FeedbackMaxAggregateInputObjectSchema } from './objects/FeedbackMaxAggregateInput.schema';

export const FeedbackAggregateSchema: z.ZodType<Prisma.FeedbackAggregateArgs> = z.object({ orderBy: z.union([FeedbackOrderByWithRelationInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedbackWhereInputObjectSchema.optional(), cursor: FeedbackWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FeedbackCountAggregateInputObjectSchema ]).optional(), _min: FeedbackMinAggregateInputObjectSchema.optional(), _max: FeedbackMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackAggregateArgs>;

export const FeedbackAggregateZodSchema = z.object({ orderBy: z.union([FeedbackOrderByWithRelationInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedbackWhereInputObjectSchema.optional(), cursor: FeedbackWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FeedbackCountAggregateInputObjectSchema ]).optional(), _min: FeedbackMinAggregateInputObjectSchema.optional(), _max: FeedbackMaxAggregateInputObjectSchema.optional() }).strict();