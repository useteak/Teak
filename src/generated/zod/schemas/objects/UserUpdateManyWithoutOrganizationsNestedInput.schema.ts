import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrganizationsInputObjectSchema as UserCreateWithoutOrganizationsInputObjectSchema } from './UserCreateWithoutOrganizationsInput.schema';
import { UserUncheckedCreateWithoutOrganizationsInputObjectSchema as UserUncheckedCreateWithoutOrganizationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationsInput.schema';
import { UserCreateOrConnectWithoutOrganizationsInputObjectSchema as UserCreateOrConnectWithoutOrganizationsInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationsInput.schema';
import { UserUpsertWithWhereUniqueWithoutOrganizationsInputObjectSchema as UserUpsertWithWhereUniqueWithoutOrganizationsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutOrganizationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutOrganizationsInputObjectSchema as UserUpdateWithWhereUniqueWithoutOrganizationsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutOrganizationsInput.schema';
import { UserUpdateManyWithWhereWithoutOrganizationsInputObjectSchema as UserUpdateManyWithWhereWithoutOrganizationsInputObjectSchema } from './UserUpdateManyWithWhereWithoutOrganizationsInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserCreateWithoutOrganizationsInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutOrganizationsInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutOrganizationsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutOrganizationsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutOrganizationsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutOrganizationsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUpdateManyWithoutOrganizationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithoutOrganizationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithoutOrganizationsNestedInput>;
export const UserUpdateManyWithoutOrganizationsNestedInputObjectZodSchema = makeSchema();
