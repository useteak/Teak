import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUpdateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOrganizationInvitationsCreatedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOrganizationInvitationsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOrganizationInvitationsCreatedInput>;
export const UserUpsertWithoutOrganizationInvitationsCreatedInputObjectZodSchema = makeSchema();
