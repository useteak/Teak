import * as z from 'zod';

export const OrganizationInvitationScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'email', 'token', 'expiresAt', 'createdByUserId', 'acceptedAt', 'acceptedByUserId', 'revokedAt', 'createdAt', 'updatedAt'])

export type OrganizationInvitationScalarFieldEnum = z.infer<typeof OrganizationInvitationScalarFieldEnumSchema>;