import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  acceptedAt: SortOrderSchema.optional(),
  acceptedByUserId: SortOrderSchema.optional(),
  revokedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const OrganizationInvitationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCountOrderByAggregateInput>;
export const OrganizationInvitationCountOrderByAggregateInputObjectZodSchema = makeSchema();
