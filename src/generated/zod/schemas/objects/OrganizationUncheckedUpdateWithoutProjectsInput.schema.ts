import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutOrganizationsNestedInputObjectSchema as UserUncheckedUpdateManyWithoutOrganizationsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutOrganizationsNestedInput.schema';
import { OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationsNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutProjectsInput>;
export const OrganizationUncheckedUpdateWithoutProjectsInputObjectZodSchema = makeSchema();
