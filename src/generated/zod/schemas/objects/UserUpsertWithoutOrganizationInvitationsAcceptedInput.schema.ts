import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUpdateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOrganizationInvitationsAcceptedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOrganizationInvitationsAcceptedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOrganizationInvitationsAcceptedInput>;
export const UserUpsertWithoutOrganizationInvitationsAcceptedInputObjectZodSchema = makeSchema();
