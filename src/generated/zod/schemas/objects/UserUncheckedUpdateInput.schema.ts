import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { OrganizationUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as OrganizationUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './OrganizationUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserNestedInputObjectSchema as OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserNestedInputObjectSchema } from './OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserNestedInput.schema';
import { ProjectMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ProjectMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProjectMemberUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  organizations: z.lazy(() => OrganizationUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserNestedInputObjectSchema).optional(),
  projectMemberships: z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = makeSchema();
