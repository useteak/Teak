import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyOrderByWithAggregationInputObjectSchema as ApiKeyOrderByWithAggregationInputObjectSchema } from './objects/ApiKeyOrderByWithAggregationInput.schema';
import { ApiKeyScalarWhereWithAggregatesInputObjectSchema as ApiKeyScalarWhereWithAggregatesInputObjectSchema } from './objects/ApiKeyScalarWhereWithAggregatesInput.schema';
import { ApiKeyScalarFieldEnumSchema } from './enums/ApiKeyScalarFieldEnum.schema';
import { ApiKeyCountAggregateInputObjectSchema as ApiKeyCountAggregateInputObjectSchema } from './objects/ApiKeyCountAggregateInput.schema';
import { ApiKeyMinAggregateInputObjectSchema as ApiKeyMinAggregateInputObjectSchema } from './objects/ApiKeyMinAggregateInput.schema';
import { ApiKeyMaxAggregateInputObjectSchema as ApiKeyMaxAggregateInputObjectSchema } from './objects/ApiKeyMaxAggregateInput.schema';

export const ApiKeyGroupBySchema: z.ZodType<Prisma.ApiKeyGroupByArgs> = z.object({ where: ApiKeyWhereInputObjectSchema.optional(), orderBy: z.union([ApiKeyOrderByWithAggregationInputObjectSchema, ApiKeyOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ApiKeyScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ApiKeyScalarFieldEnumSchema), _count: z.union([ z.literal(true), ApiKeyCountAggregateInputObjectSchema ]).optional(), _min: ApiKeyMinAggregateInputObjectSchema.optional(), _max: ApiKeyMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyGroupByArgs>;

export const ApiKeyGroupByZodSchema = z.object({ where: ApiKeyWhereInputObjectSchema.optional(), orderBy: z.union([ApiKeyOrderByWithAggregationInputObjectSchema, ApiKeyOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ApiKeyScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ApiKeyScalarFieldEnumSchema), _count: z.union([ z.literal(true), ApiKeyCountAggregateInputObjectSchema ]).optional(), _min: ApiKeyMinAggregateInputObjectSchema.optional(), _max: ApiKeyMaxAggregateInputObjectSchema.optional() }).strict();