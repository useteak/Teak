import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema as OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema } from './OrganizationCreateNestedOneWithoutInvitationsInput.schema';
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
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema),
  acceptedByUser: z.lazy(() => UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInputObjectSchema).optional()
}).strict();
export const OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateWithoutCreatedByUserInput>;
export const OrganizationInvitationCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
