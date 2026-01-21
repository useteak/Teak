import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema as ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';
import { OrganizationInvitationListRelationFilterObjectSchema as OrganizationInvitationListRelationFilterObjectSchema } from './OrganizationInvitationListRelationFilter.schema';
import { ApiKeyListRelationFilterObjectSchema as ApiKeyListRelationFilterObjectSchema } from './ApiKeyListRelationFilter.schema'

const organizationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationWhereInputObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationWhereInputObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  projects: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationListRelationFilterObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyListRelationFilterObjectSchema).optional()
}).strict();
export const OrganizationWhereInputObjectSchema: z.ZodType<Prisma.OrganizationWhereInput> = organizationwhereinputSchema as unknown as z.ZodType<Prisma.OrganizationWhereInput>;
export const OrganizationWhereInputObjectZodSchema = organizationwhereinputSchema;
