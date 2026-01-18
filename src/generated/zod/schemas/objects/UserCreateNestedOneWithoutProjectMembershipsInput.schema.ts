import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProjectMembershipsInputObjectSchema as UserCreateWithoutProjectMembershipsInputObjectSchema } from './UserCreateWithoutProjectMembershipsInput.schema';
import { UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema as UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutProjectMembershipsInput.schema';
import { UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema as UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema } from './UserCreateOrConnectWithoutProjectMembershipsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProjectMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutProjectMembershipsInput>;
export const UserCreateNestedOneWithoutProjectMembershipsInputObjectZodSchema = makeSchema();
