import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  description: z.string(),
  type: FeedbackTypeSchema,
  email: z.string().optional().nullable(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const FeedbackCreateManyInputObjectSchema: z.ZodType<Prisma.FeedbackCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCreateManyInput>;
export const FeedbackCreateManyInputObjectZodSchema = makeSchema();
