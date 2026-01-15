import * as z from 'zod';
export const OrganizationInvitationFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});