import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedManyWithoutOrganizationsInputObjectSchema as UserCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationsInput.schema';
import { ProjectCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectCreateNestedManyWithoutOrganizationInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateInputObjectSchema: z.ZodType<Prisma.OrganizationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateInput>;
export const OrganizationCreateInputObjectZodSchema = makeSchema();
