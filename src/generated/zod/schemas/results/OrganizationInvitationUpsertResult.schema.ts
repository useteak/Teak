import * as z from 'zod';
export const OrganizationInvitationUpsertResultSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  email: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  createdByUserId: z.string(),
  createdByUser: z.unknown(),
  acceptedAt: z.date().optional(),
  acceptedByUserId: z.string().optional(),
  acceptedByUser: z.unknown().optional(),
  revokedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});