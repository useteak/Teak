import * as z from 'zod';
export const OrganizationInvitationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    organizationId: z.number(),
    organization: z.number(),
    email: z.number(),
    token: z.number(),
    expiresAt: z.number(),
    createdByUserId: z.number(),
    createdByUser: z.number(),
    acceptedAt: z.number(),
    acceptedByUserId: z.number(),
    acceptedByUser: z.number(),
    revokedAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    email: z.string().nullable(),
    token: z.string().nullable(),
    expiresAt: z.date().nullable(),
    createdByUserId: z.string().nullable(),
    acceptedAt: z.date().nullable(),
    acceptedByUserId: z.string().nullable(),
    revokedAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    email: z.string().nullable(),
    token: z.string().nullable(),
    expiresAt: z.date().nullable(),
    createdByUserId: z.string().nullable(),
    acceptedAt: z.date().nullable(),
    acceptedByUserId: z.string().nullable(),
    revokedAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});