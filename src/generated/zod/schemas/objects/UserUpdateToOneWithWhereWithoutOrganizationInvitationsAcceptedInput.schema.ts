import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUpdateWithoutOrganizationInvitationsAcceptedInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema as UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInvitationsAcceptedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInput>;
export const UserUpdateToOneWithWhereWithoutOrganizationInvitationsAcceptedInputObjectZodSchema = makeSchema();
