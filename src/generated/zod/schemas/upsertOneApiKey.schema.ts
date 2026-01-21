import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './objects/ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyCreateInputObjectSchema as ApiKeyCreateInputObjectSchema } from './objects/ApiKeyCreateInput.schema';
import { ApiKeyUncheckedCreateInputObjectSchema as ApiKeyUncheckedCreateInputObjectSchema } from './objects/ApiKeyUncheckedCreateInput.schema';
import { ApiKeyUpdateInputObjectSchema as ApiKeyUpdateInputObjectSchema } from './objects/ApiKeyUpdateInput.schema';
import { ApiKeyUncheckedUpdateInputObjectSchema as ApiKeyUncheckedUpdateInputObjectSchema } from './objects/ApiKeyUncheckedUpdateInput.schema';

export const ApiKeyUpsertOneSchema: z.ZodType<Prisma.ApiKeyUpsertArgs> = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema, create: z.union([ ApiKeyCreateInputObjectSchema, ApiKeyUncheckedCreateInputObjectSchema ]), update: z.union([ ApiKeyUpdateInputObjectSchema, ApiKeyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ApiKeyUpsertArgs>;

export const ApiKeyUpsertOneZodSchema = z.object({ select: ApiKeySelectObjectSchema.optional(), include: ApiKeyIncludeObjectSchema.optional(), where: ApiKeyWhereUniqueInputObjectSchema, create: z.union([ ApiKeyCreateInputObjectSchema, ApiKeyUncheckedCreateInputObjectSchema ]), update: z.union([ ApiKeyUpdateInputObjectSchema, ApiKeyUncheckedUpdateInputObjectSchema ]) }).strict();