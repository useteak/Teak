import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyUpdateInputObjectSchema as ApiKeyUpdateInputObjectSchema } from './objects/ApiKeyUpdateInput.schema';
import { ApiKeyUncheckedUpdateInputObjectSchema as ApiKeyUncheckedUpdateInputObjectSchema } from './objects/ApiKeyUncheckedUpdateInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyUpdateOneSchema: z.ZodType<Prisma.ApiKeyUpdateArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), data: z.union([ApiKeyUpdateInputObjectSchema, ApiKeyUncheckedUpdateInputObjectSchema]), where: ApiKeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiKeyUpdateArgs>;

export const ApiKeyUpdateOneZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), data: z.union([ApiKeyUpdateInputObjectSchema, ApiKeyUncheckedUpdateInputObjectSchema]), where: ApiKeyWhereUniqueInputObjectSchema }).strict();