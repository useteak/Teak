import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema as OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema } from './OrganizationCreateNestedOneWithoutInvitationsInput.schema';
import { UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutOrganizationInvitationsCreatedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
  revokedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema)
}).strict();
export const OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateWithoutAcceptedByUserInput>;
export const OrganizationInvitationCreateWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
