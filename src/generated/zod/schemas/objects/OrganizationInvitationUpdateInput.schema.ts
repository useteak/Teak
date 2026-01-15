import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema as OrganizationUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutInvitationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema as UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInput.schema';
import { UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInputObjectSchema as UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInputObjectSchema } from './UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  acceptedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  revokedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema).optional(),
  acceptedByUser: z.lazy(() => UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInputObjectSchema).optional()
}).strict();
export const OrganizationInvitationUpdateInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateInput>;
export const OrganizationInvitationUpdateInputObjectZodSchema = makeSchema();
