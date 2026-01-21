import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedManyWithoutOrganizationsInputObjectSchema as UserCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationsInput.schema';
import { ProjectCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectCreateNestedManyWithoutOrganizationInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutApiKeysInput>;
export const OrganizationCreateWithoutApiKeysInputObjectZodSchema = makeSchema();
