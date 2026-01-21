import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyDeleteOneSchema: z.ZodType<Prisma.ApiKeyDeleteArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiKeyDeleteArgs>;

export const ApiKeyDeleteOneZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema }).strict();