import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema as UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrganizationsInput.schema';
import { OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  invitations: z.lazy(() => OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateWithoutProjectsInput>;
export const OrganizationUncheckedCreateWithoutProjectsInputObjectZodSchema = makeSchema();
