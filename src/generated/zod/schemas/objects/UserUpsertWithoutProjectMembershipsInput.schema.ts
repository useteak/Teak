import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutProjectMembershipsInputObjectSchema as UserUpdateWithoutProjectMembershipsInputObjectSchema } from './UserUpdateWithoutProjectMembershipsInput.schema';
import { UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema as UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedUpdateWithoutProjectMembershipsInput.schema';
import { UserCreateWithoutProjectMembershipsInputObjectSchema as UserCreateWithoutProjectMembershipsInputObjectSchema } from './UserCreateWithoutProjectMembershipsInput.schema';
import { UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema as UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutProjectMembershipsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutProjectMembershipsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutProjectMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutProjectMembershipsInput>;
export const UserUpsertWithoutProjectMembershipsInputObjectZodSchema = makeSchema();
