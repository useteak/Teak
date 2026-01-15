import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  acceptedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  acceptedByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  revokedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  acceptedByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OrganizationInvitationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationOrderByWithRelationInput>;
export const OrganizationInvitationOrderByWithRelationInputObjectZodSchema = makeSchema();
