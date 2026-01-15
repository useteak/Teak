import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectCreateNestedManyWithoutOrganizationInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projects: z.lazy(() => ProjectCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutUsersInput>;
export const OrganizationCreateWithoutUsersInputObjectZodSchema = makeSchema();
