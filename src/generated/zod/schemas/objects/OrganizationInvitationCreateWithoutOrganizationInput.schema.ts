import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutOrganizationInvitationsCreatedInput.schema';
import { UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
  revokedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema),
  acceptedByUser: z.lazy(() => UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInputObjectSchema).optional()
}).strict();
export const OrganizationInvitationCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateWithoutOrganizationInput>;
export const OrganizationInvitationCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
