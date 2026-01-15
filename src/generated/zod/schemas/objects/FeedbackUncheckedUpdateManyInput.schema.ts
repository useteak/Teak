import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema as EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema } from './EnumFeedbackTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([FeedbackTypeSchema, z.lazy(() => EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  projectId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const FeedbackUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.FeedbackUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUncheckedUpdateManyInput>;
export const FeedbackUncheckedUpdateManyInputObjectZodSchema = makeSchema();
