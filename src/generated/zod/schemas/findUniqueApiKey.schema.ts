import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyFindUniqueSchema: z.ZodType<Prisma.ApiKeyFindUniqueArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiKeyFindUniqueArgs>;

export const ApiKeyFindUniqueZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema }).strict();