import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutOrganizationsNestedInputObjectSchema as UserUncheckedUpdateManyWithoutOrganizationsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutOrganizationsNestedInput.schema';
import { ProjectUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as ProjectUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationsNestedInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedUpdateWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutInvitationsInput>;
export const OrganizationUncheckedUpdateWithoutInvitationsInputObjectZodSchema = makeSchema();
