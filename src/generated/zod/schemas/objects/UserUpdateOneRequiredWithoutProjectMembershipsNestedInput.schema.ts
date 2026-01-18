import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProjectMembershipsInputObjectSchema as UserCreateWithoutProjectMembershipsInputObjectSchema } from './UserCreateWithoutProjectMembershipsInput.schema';
import { UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema as UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutProjectMembershipsInput.schema';
import { UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema as UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema } from './UserCreateOrConnectWithoutProjectMembershipsInput.schema';
import { UserUpsertWithoutProjectMembershipsInputObjectSchema as UserUpsertWithoutProjectMembershipsInputObjectSchema } from './UserUpsertWithoutProjectMembershipsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutProjectMembershipsInputObjectSchema as UserUpdateToOneWithWhereWithoutProjectMembershipsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutProjectMembershipsInput.schema';
import { UserUpdateWithoutProjectMembershipsInputObjectSchema as UserUpdateWithoutProjectMembershipsInputObjectSchema } from './UserUpdateWithoutProjectMembershipsInput.schema';
import { UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema as UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedUpdateWithoutProjectMembershipsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProjectMembershipsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUpdateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutProjectMembershipsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProjectMembershipsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutProjectMembershipsNestedInput>;
export const UserUpdateOneRequiredWithoutProjectMembershipsNestedInputObjectZodSchema = makeSchema();
