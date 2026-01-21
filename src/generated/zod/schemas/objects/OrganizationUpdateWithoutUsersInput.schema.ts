import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema as ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ProjectUpdateManyWithoutOrganizationNestedInput.schema';
import { OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema as OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema } from './OrganizationInvitationUpdateManyWithoutOrganizationNestedInput.schema';
import { ApiKeyUpdateManyWithoutOrganizationNestedInputObjectSchema as ApiKeyUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ApiKeyUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  projects: z.lazy(() => ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithoutUsersInput>;
export const OrganizationUpdateWithoutUsersInputObjectZodSchema = makeSchema();
