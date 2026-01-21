import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './ApiKeyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ApiKeyWhereInputObjectSchema).optional(),
  some: z.lazy(() => ApiKeyWhereInputObjectSchema).optional(),
  none: z.lazy(() => ApiKeyWhereInputObjectSchema).optional()
}).strict();
export const ApiKeyListRelationFilterObjectSchema: z.ZodType<Prisma.ApiKeyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyListRelationFilter>;
export const ApiKeyListRelationFilterObjectZodSchema = makeSchema();
