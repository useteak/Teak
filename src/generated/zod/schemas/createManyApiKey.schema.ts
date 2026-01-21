import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeyCreateManyInputObjectSchema as ApiKeyCreateManyInputObjectSchema } from './objects/ApiKeyCreateManyInput.schema';

export const ApiKeyCreateManySchema: z.ZodType<Prisma.ApiKeyCreateManyArgs> = z.object({ data: z.union([ ApiKeyCreateManyInputObjectSchema, z.array(ApiKeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyCreateManyArgs>;

export const ApiKeyCreateManyZodSchema = z.object({ data: z.union([ ApiKeyCreateManyInputObjectSchema, z.array(ApiKeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();