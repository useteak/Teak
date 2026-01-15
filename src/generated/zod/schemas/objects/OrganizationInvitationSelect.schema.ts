import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  email: z.boolean().optional(),
  token: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  acceptedAt: z.boolean().optional(),
  acceptedByUserId: z.boolean().optional(),
  acceptedByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  revokedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const OrganizationInvitationSelectObjectSchema: z.ZodType<Prisma.OrganizationInvitationSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationSelect>;
export const OrganizationInvitationSelectObjectZodSchema = makeSchema();
