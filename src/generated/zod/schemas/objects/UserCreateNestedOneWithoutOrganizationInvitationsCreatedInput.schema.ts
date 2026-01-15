import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationInvitationsCreatedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganizationInvitationsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOrganizationInvitationsCreatedInput>;
export const UserCreateNestedOneWithoutOrganizationInvitationsCreatedInputObjectZodSchema = makeSchema();
