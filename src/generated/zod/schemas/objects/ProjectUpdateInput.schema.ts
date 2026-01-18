import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneRequiredWithoutProjectsNestedInputObjectSchema as OrganizationUpdateOneRequiredWithoutProjectsNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutProjectsNestedInput.schema';
import { FeedbackUpdateManyWithoutProjectNestedInputObjectSchema as FeedbackUpdateManyWithoutProjectNestedInputObjectSchema } from './FeedbackUpdateManyWithoutProjectNestedInput.schema';
import { ProjectMemberUpdateManyWithoutProjectNestedInputObjectSchema as ProjectMemberUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectMemberUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  rateLimitingEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutProjectsNestedInputObjectSchema).optional(),
  feedbacks: z.lazy(() => FeedbackUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  members: z.lazy(() => ProjectMemberUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateInputObjectSchema: z.ZodType<Prisma.ProjectUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateInput>;
export const ProjectUpdateInputObjectZodSchema = makeSchema();
