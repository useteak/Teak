import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';

export const ApiKeyDeleteManySchema: z.ZodType<Prisma.ApiKeyDeleteManyArgs> = z.object({ where: ApiKeyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyDeleteManyArgs>;

export const ApiKeyDeleteManyZodSchema = z.object({ where: ApiKeyWhereInputObjectSchema.optional() }).strict();