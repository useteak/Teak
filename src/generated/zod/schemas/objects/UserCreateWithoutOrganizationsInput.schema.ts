import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutAcceptedByUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutOrganizationsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutOrganizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutOrganizationsInput>;
export const UserCreateWithoutOrganizationsInputObjectZodSchema = makeSchema();
