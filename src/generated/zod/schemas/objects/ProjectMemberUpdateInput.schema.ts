import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProjectUpdateOneRequiredWithoutMembersNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutMembersNestedInput.schema';
import { UserUpdateOneRequiredWithoutProjectMembershipsNestedInputObjectSchema as UserUpdateOneRequiredWithoutProjectMembershipsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProjectMembershipsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notifyOnFeedback: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProjectMembershipsNestedInputObjectSchema).optional()
}).strict();
export const ProjectMemberUpdateInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpdateInput>;
export const ProjectMemberUpdateInputObjectZodSchema = makeSchema();
