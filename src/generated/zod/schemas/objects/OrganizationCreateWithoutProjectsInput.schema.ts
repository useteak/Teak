import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedManyWithoutOrganizationsInputObjectSchema as UserCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationsInput.schema';
import { OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutProjectsInput>;
export const OrganizationCreateWithoutProjectsInputObjectZodSchema = makeSchema();
