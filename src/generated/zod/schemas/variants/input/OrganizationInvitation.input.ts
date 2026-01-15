import * as z from 'zod';
// prettier-ignore
export const OrganizationInvitationInputSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    email: z.string(),
    token: z.string(),
    expiresAt: z.date(),
    createdByUserId: z.string(),
    createdByUser: z.unknown(),
    acceptedAt: z.date().optional().nullable(),
    acceptedByUserId: z.string().optional().nullable(),
    acceptedByUser: z.unknown().optional().nullable(),
    revokedAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrganizationInvitationInputType = z.infer<typeof OrganizationInvitationInputSchema>;
