import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  email: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  createdByUserId: z.string(),
  acceptedAt: z.coerce.date().optional().nullable(),
  acceptedByUserId: z.string().optional().nullable(),
  revokedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrganizationInvitationCreateManyInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateManyInput>;
export const OrganizationInvitationCreateManyInputObjectZodSchema = makeSchema();
