import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeyOrderByWithRelationInputObjectSchema as ApiKeyOrderByWithRelationInputObjectSchema } from './objects/ApiKeyOrderByWithRelationInput.schema';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyCountAggregateInputObjectSchema as ApiKeyCountAggregateInputObjectSchema } from './objects/ApiKeyCountAggregateInput.schema';

export const ApiKeyCountSchema: z.ZodType<Prisma.ApiKeyCountArgs> = z.object({ orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ApiKeyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyCountArgs>;

export const ApiKeyCountZodSchema = z.object({ orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ApiKeyCountAggregateInputObjectSchema ]).optional() }).strict();