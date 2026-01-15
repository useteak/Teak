import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutOrganizationsNestedInputObjectSchema as UserUpdateManyWithoutOrganizationsNestedInputObjectSchema } from './UserUpdateManyWithoutOrganizationsNestedInput.schema';
import { OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema as OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema } from './OrganizationInvitationUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutOrganizationsNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithoutProjectsInput>;
export const OrganizationUpdateWithoutProjectsInputObjectZodSchema = makeSchema();
