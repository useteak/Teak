import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const organizationinvitationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema), z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema), z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdByUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  acceptedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  acceptedByUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  revokedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OrganizationInvitationScalarWhereInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationScalarWhereInput> = organizationinvitationscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrganizationInvitationScalarWhereInput>;
export const OrganizationInvitationScalarWhereInputObjectZodSchema = organizationinvitationscalarwhereinputSchema;
