import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { OrganizationCreateNestedManyWithoutUsersInputObjectSchema as OrganizationCreateNestedManyWithoutUsersInputObjectSchema } from './OrganizationCreateNestedManyWithoutUsersInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInput.schema';
import { ProjectMemberCreateNestedManyWithoutUserInputObjectSchema as ProjectMemberCreateNestedManyWithoutUserInputObjectSchema } from './ProjectMemberCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organizations: z.lazy(() => OrganizationCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema).optional(),
  projectMemberships: z.lazy(() => ProjectMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutOrganizationInvitationsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutOrganizationInvitationsCreatedInput>;
export const UserCreateWithoutOrganizationInvitationsCreatedInputObjectZodSchema = makeSchema();
