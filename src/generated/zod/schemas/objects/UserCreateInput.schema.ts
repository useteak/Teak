import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organizations: z.lazy(() => OrganizationCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema).optional(),
  projectMemberships: z.lazy(() => ProjectMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
