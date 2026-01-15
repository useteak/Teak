import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedManyWithoutOrganizationsInputObjectSchema as UserCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationsInput.schema';
import { ProjectCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutInvitationsInput>;
export const OrganizationCreateWithoutInvitationsInputObjectZodSchema = makeSchema();
