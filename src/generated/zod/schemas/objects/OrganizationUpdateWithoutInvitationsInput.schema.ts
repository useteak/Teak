import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutOrganizationsNestedInputObjectSchema as UserUpdateManyWithoutOrganizationsNestedInputObjectSchema } from './UserUpdateManyWithoutOrganizationsNestedInput.schema';
import { ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema as ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ProjectUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutOrganizationsNestedInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithoutInvitationsInput>;
export const OrganizationUpdateWithoutInvitationsInputObjectZodSchema = makeSchema();
