import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { OrganizationCreateNestedManyWithoutUsersInputObjectSchema as OrganizationCreateNestedManyWithoutUsersInputObjectSchema } from './OrganizationCreateNestedManyWithoutUsersInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutCreatedByUserInput.schema'

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
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutOrganizationInvitationsAcceptedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutOrganizationInvitationsAcceptedInput>;
export const UserCreateWithoutOrganizationInvitationsAcceptedInputObjectZodSchema = makeSchema();
