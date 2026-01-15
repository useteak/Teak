import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  description: z.string(),
  type: FeedbackTypeSchema,
  email: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const FeedbackUncheckedCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.FeedbackUncheckedCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUncheckedCreateWithoutProjectInput>;
export const FeedbackUncheckedCreateWithoutProjectInputObjectZodSchema = makeSchema();
