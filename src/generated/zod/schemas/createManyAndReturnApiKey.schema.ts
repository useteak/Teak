import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyCreateManyInputObjectSchema as ApiKeyCreateManyInputObjectSchema } from './objects/ApiKeyCreateManyInput.schema';

export const ApiKeyCreateManyAndReturnSchema: z.ZodType<Prisma.ApiKeyCreateManyAndReturnArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), data: z.union([ ApiKeyCreateManyInputObjectSchema, z.array(ApiKeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyCreateManyAndReturnArgs>;

export const ApiKeyCreateManyAndReturnZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), data: z.union([ ApiKeyCreateManyInputObjectSchema, z.array(ApiKeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();