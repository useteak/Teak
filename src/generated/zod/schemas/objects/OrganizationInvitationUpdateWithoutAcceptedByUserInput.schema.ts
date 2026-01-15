import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema as OrganizationUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutInvitationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema as UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInput.schema'

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
  createdByUser: z.lazy(() => UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema).optional()
}).strict();
export const OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateWithoutAcceptedByUserInput>;
export const OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
