import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const organizationinvitationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationInvitationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganizationInvitationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationInvitationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationInvitationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganizationInvitationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdByUserId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  acceptedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  acceptedByUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  revokedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OrganizationInvitationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationScalarWhereWithAggregatesInput> = organizationinvitationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OrganizationInvitationScalarWhereWithAggregatesInput>;
export const OrganizationInvitationScalarWhereWithAggregatesInputObjectZodSchema = organizationinvitationscalarwherewithaggregatesinputSchema;
