import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema as UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrganizationsInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateWithoutApiKeysInput>;
export const OrganizationUncheckedCreateWithoutApiKeysInputObjectZodSchema = makeSchema();
