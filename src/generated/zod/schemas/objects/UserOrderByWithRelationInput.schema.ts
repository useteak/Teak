import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { OrganizationOrderByRelationAggregateInputObjectSchema as OrganizationOrderByRelationAggregateInputObjectSchema } from './OrganizationOrderByRelationAggregateInput.schema';
import { OrganizationInvitationOrderByRelationAggregateInputObjectSchema as OrganizationInvitationOrderByRelationAggregateInputObjectSchema } from './OrganizationInvitationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  organizations: z.lazy(() => OrganizationOrderByRelationAggregateInputObjectSchema).optional(),
  organizationInvitationsCreated: z.lazy(() => OrganizationInvitationOrderByRelationAggregateInputObjectSchema).optional(),
  organizationInvitationsAccepted: z.lazy(() => OrganizationInvitationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
