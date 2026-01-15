import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsAcceptedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInput>;
export const UserCreateOrConnectWithoutOrganizationInvitationsAcceptedInputObjectZodSchema = makeSchema();
