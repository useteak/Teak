import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeyUpdateManyMutationInputObjectSchema as ApiKeyUpdateManyMutationInputObjectSchema } from './objects/ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';

export const ApiKeyUpdateManySchema: z.ZodType<Prisma.ApiKeyUpdateManyArgs> = z.object({ data: ApiKeyUpdateManyMutationInputObjectSchema, where: ApiKeyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyArgs>;

export const ApiKeyUpdateManyZodSchema = z.object({ data: ApiKeyUpdateManyMutationInputObjectSchema, where: ApiKeyWhereInputObjectSchema.optional() }).strict();