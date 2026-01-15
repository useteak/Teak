import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  email: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
  acceptedByUserId: z.string().optional().nullable(),
  revokedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUncheckedCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUncheckedCreateWithoutCreatedByUserInput>;
export const OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
