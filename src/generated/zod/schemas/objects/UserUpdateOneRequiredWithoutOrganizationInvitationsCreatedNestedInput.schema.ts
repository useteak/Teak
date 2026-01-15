import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUpsertWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUpsertWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUpsertWithoutOrganizationInvitationsCreatedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUpdateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrganizationInvitationsCreatedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInput>;
export const UserUpdateOneRequiredWithoutOrganizationInvitationsCreatedNestedInputObjectZodSchema = makeSchema();
