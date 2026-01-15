import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema'

const makeSchema = () => z.object({
  set: FeedbackTypeSchema.optional()
}).strict();
export const EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumFeedbackTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeedbackTypeFieldUpdateOperationsInput>;
export const EnumFeedbackTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
