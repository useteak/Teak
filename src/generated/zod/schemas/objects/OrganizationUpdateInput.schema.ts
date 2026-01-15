import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutOrganizationsNestedInputObjectSchema as UserUpdateManyWithoutOrganizationsNestedInputObjectSchema } from './UserUpdateManyWithoutOrganizationsNestedInput.schema';
import { ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema as ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ProjectUpdateManyWithoutOrganizationNestedInput.schema';
import { OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema as OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema } from './OrganizationInvitationUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutOrganizationsNestedInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateInput>;
export const OrganizationUpdateInputObjectZodSchema = makeSchema();
