import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { OrganizationScalarRelationFilterObjectSchema as OrganizationScalarRelationFilterObjectSchema } from './OrganizationScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema'

const organizationinvitationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationInvitationWhereInputObjectSchema), z.lazy(() => OrganizationInvitationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationInvitationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationInvitationWhereInputObjectSchema), z.lazy(() => OrganizationInvitationWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  organization: z.union([z.lazy(() => OrganizationScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  createdByUser: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  acceptedByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const OrganizationInvitationWhereInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationWhereInput> = organizationinvitationwhereinputSchema as unknown as z.ZodType<Prisma.OrganizationInvitationWhereInput>;
export const OrganizationInvitationWhereInputObjectZodSchema = organizationinvitationwhereinputSchema;
