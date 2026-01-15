import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  email: z.literal(true).optional(),
  token: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  acceptedAt: z.literal(true).optional(),
  acceptedByUserId: z.literal(true).optional(),
  revokedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OrganizationInvitationMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationMaxAggregateInputType>;
export const OrganizationInvitationMaxAggregateInputObjectZodSchema = makeSchema();
