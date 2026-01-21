import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyCreateInputObjectSchema as ApiKeyCreateInputObjectSchema } from './objects/ApiKeyCreateInput.schema';
import { ApiKeyUncheckedCreateInputObjectSchema as ApiKeyUncheckedCreateInputObjectSchema } from './objects/ApiKeyUncheckedCreateInput.schema';

export const ApiKeyCreateOneSchema: z.ZodType<Prisma.ApiKeyCreateArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), data: z.union([ApiKeyCreateInputObjectSchema, ApiKeyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ApiKeyCreateArgs>;

export const ApiKeyCreateOneZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), data: z.union([ApiKeyCreateInputObjectSchema, ApiKeyUncheckedCreateInputObjectSchema]) }).strict();