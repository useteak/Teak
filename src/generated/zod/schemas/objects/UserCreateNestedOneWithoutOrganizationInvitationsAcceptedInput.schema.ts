import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInput>;
export const UserCreateNestedOneWithoutOrganizationInvitationsAcceptedInputObjectZodSchema = makeSchema();
