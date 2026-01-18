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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const FeedbackCreateManyProjectInputObjectSchema: z.ZodType<Prisma.FeedbackCreateManyProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCreateManyProjectInput>;
export const FeedbackCreateManyProjectInputObjectZodSchema = makeSchema();
