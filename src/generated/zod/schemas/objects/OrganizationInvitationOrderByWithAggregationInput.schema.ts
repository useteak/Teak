import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrganizationInvitationCountOrderByAggregateInputObjectSchema as OrganizationInvitationCountOrderByAggregateInputObjectSchema } from './OrganizationInvitationCountOrderByAggregateInput.schema';
import { OrganizationInvitationMaxOrderByAggregateInputObjectSchema as OrganizationInvitationMaxOrderByAggregateInputObjectSchema } from './OrganizationInvitationMaxOrderByAggregateInput.schema';
import { OrganizationInvitationMinOrderByAggregateInputObjectSchema as OrganizationInvitationMinOrderByAggregateInputObjectSchema } from './OrganizationInvitationMinOrderByAggregateInput.schema'

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
  _count: z.lazy(() => OrganizationInvitationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrganizationInvitationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrganizationInvitationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrganizationInvitationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationOrderByWithAggregationInput>;
export const OrganizationInvitationOrderByWithAggregationInputObjectZodSchema = makeSchema();
