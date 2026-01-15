import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema as EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema } from './EnumFeedbackTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProjectUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutFeedbacksNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([FeedbackTypeSchema, z.lazy(() => EnumFeedbackTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema).optional()
}).strict();
export const FeedbackUpdateInputObjectSchema: z.ZodType<Prisma.FeedbackUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUpdateInput>;
export const FeedbackUpdateInputObjectZodSchema = makeSchema();
