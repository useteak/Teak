import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { OrganizationCreateNestedManyWithoutUsersInputObjectSchema as OrganizationCreateNestedManyWithoutUsersInputObjectSchema } from './OrganizationCreateNestedManyWithoutUsersInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutCreatedByUserInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organizations: z.lazy(() => OrganizationCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
