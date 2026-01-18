import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ProjectCreateNestedOneWithoutFeedbacksInputObjectSchema as ProjectCreateNestedOneWithoutFeedbacksInputObjectSchema } from './ProjectCreateNestedOneWithoutFeedbacksInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  description: z.string(),
  type: FeedbackTypeSchema,
  email: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutFeedbacksInputObjectSchema)
}).strict();
export const FeedbackCreateInputObjectSchema: z.ZodType<Prisma.FeedbackCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCreateInput>;
export const FeedbackCreateInputObjectZodSchema = makeSchema();
