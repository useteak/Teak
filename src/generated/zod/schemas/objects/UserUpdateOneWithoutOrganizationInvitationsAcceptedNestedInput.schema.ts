import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUpsertWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUpsertWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUpsertWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUpdateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrganizationInvitationsAcceptedInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInput>;
export const UserUpdateOneWithoutOrganizationInvitationsAcceptedNestedInputObjectZodSchema = makeSchema();
