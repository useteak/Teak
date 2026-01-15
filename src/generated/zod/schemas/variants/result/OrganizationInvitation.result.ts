import * as z from 'zod';
// prettier-ignore
export const OrganizationInvitationResultSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    email: z.string(),
    token: z.string(),
    expiresAt: z.date(),
    createdByUserId: z.string(),
    createdByUser: z.unknown(),
    acceptedAt: z.date().nullable(),
    acceptedByUserId: z.string().nullable(),
    acceptedByUser: z.unknown().nullable(),
    revokedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrganizationInvitationResultType = z.infer<typeof OrganizationInvitationResultSchema>;
