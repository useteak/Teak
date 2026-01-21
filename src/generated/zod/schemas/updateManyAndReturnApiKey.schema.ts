import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyUpdateManyMutationInputObjectSchema as ApiKeyUpdateManyMutationInputObjectSchema } from './objects/ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';

export const ApiKeyUpdateManyAndReturnSchema: z.ZodType<Prisma.ApiKeyUpdateManyAndReturnArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), data: ApiKeyUpdateManyMutationInputObjectSchema, where: ApiKeyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyAndReturnArgs>;

export const ApiKeyUpdateManyAndReturnZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), data: ApiKeyUpdateManyMutationInputObjectSchema, where: ApiKeyWhereInputObjectSchema.optional() }).strict();