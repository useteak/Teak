import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserCreateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInvitationsCreatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInvitationsCreatedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationInvitationsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationInvitationsCreatedInput>;
export const UserCreateOrConnectWithoutOrganizationInvitationsCreatedInputObjectZodSchema = makeSchema();
