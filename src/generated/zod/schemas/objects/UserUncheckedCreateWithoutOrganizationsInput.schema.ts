import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrganizationInvitationUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInput.schema';
import { ProjectMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema as ProjectMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInputObjectSchema).optional(),
  projectMemberships: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutOrganizationsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutOrganizationsInput>;
export const UserUncheckedCreateWithoutOrganizationsInputObjectZodSchema = makeSchema();
