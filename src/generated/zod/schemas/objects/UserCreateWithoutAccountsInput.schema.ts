import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { OrganizationCreateNestedManyWithoutUsersInputObjectSchema as OrganizationCreateNestedManyWithoutUsersInputObjectSchema } from './OrganizationCreateNestedManyWithoutUsersInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutCreatedByUserInput.schema';
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
  organizations: z.lazy(() => OrganizationCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema).optional(),
  projectMemberships: z.lazy(() => ProjectMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
