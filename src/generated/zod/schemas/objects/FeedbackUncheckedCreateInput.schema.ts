import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  description: z.string(),
  type: FeedbackTypeSchema,
  email: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const FeedbackUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FeedbackUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUncheckedCreateInput>;
export const FeedbackUncheckedCreateInputObjectZodSchema = makeSchema();
