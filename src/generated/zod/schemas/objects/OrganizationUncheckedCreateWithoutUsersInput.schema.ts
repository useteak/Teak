import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { ApiKeyUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as ApiKeyUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projects: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
export const OrganizationUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
