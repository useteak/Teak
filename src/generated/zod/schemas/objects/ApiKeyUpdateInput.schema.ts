import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneRequiredWithoutApiKeysNestedInputObjectSchema as OrganizationUpdateOneRequiredWithoutApiKeysNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutApiKeysNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutApiKeysNestedInputObjectSchema).optional()
}).strict();
export const ApiKeyUpdateInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateInput>;
export const ApiKeyUpdateInputObjectZodSchema = makeSchema();
