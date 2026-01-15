import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrganizationsInputObjectSchema as UserUpdateWithoutOrganizationsInputObjectSchema } from './UserUpdateWithoutOrganizationsInput.schema';
import { UserUncheckedUpdateWithoutOrganizationsInputObjectSchema as UserUncheckedUpdateWithoutOrganizationsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationsInput.schema';
import { UserCreateWithoutOrganizationsInputObjectSchema as UserCreateWithoutOrganizationsInputObjectSchema } from './UserCreateWithoutOrganizationsInput.schema';
import { UserUncheckedCreateWithoutOrganizationsInputObjectSchema as UserUncheckedCreateWithoutOrganizationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationsInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutOrganizationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutOrganizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutOrganizationsInput>;
export const UserUpsertWithWhereUniqueWithoutOrganizationsInputObjectZodSchema = makeSchema();
