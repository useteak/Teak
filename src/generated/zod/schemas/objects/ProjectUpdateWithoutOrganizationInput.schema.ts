import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FeedbackUpdateManyWithoutProjectNestedInputObjectSchema as FeedbackUpdateManyWithoutProjectNestedInputObjectSchema } from './FeedbackUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  rateLimitingEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  feedbacks: z.lazy(() => FeedbackUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutOrganizationInput>;
export const ProjectUpdateWithoutOrganizationInputObjectZodSchema = makeSchema();
