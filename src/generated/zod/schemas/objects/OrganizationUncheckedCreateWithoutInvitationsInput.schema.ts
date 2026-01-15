import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema as UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrganizationsInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateWithoutInvitationsInput>;
export const OrganizationUncheckedCreateWithoutInvitationsInputObjectZodSchema = makeSchema();
