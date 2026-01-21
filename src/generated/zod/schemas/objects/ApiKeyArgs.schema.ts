import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeySelectObjectSchema as ApiKeySelectObjectSchema } from './ApiKeySelect.schema';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './ApiKeyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ApiKeySelectObjectSchema).optional(),
  include: z.lazy(() => ApiKeyIncludeObjectSchema).optional()
}).strict();
export const ApiKeyArgsObjectSchema = makeSchema();
export const ApiKeyArgsObjectZodSchema = makeSchema();
