import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema as ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';
import { OrganizationInvitationListRelationFilterObjectSchema as OrganizationInvitationListRelationFilterObjectSchema } from './OrganizationInvitationListRelationFilter.schema'

const organizationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationWhereInputObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationWhereInputObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  projects: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationListRelationFilterObjectSchema).optional()
}).strict();
export const OrganizationWhereInputObjectSchema: z.ZodType<Prisma.OrganizationWhereInput> = organizationwhereinputSchema as unknown as z.ZodType<Prisma.OrganizationWhereInput>;
export const OrganizationWhereInputObjectZodSchema = organizationwhereinputSchema;
