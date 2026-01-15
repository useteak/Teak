import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUpdateWithoutOrganizationInvitationsCreatedInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema as UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInvitationsCreatedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInput>;
export const UserUpdateToOneWithWhereWithoutOrganizationInvitationsCreatedInputObjectZodSchema = makeSchema();
