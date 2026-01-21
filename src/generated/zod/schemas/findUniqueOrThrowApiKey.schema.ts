import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyFindUniqueOrThrowSchema: z.ZodType<Prisma.ApiKeyFindUniqueOrThrowArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiKeyFindUniqueOrThrowArgs>;

export const ApiKeyFindUniqueOrThrowZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema }).strict();