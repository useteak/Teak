import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProjectMembershipsInputObjectSchema as UserCreateWithoutProjectMembershipsInputObjectSchema } from './UserCreateWithoutProjectMembershipsInput.schema';
import { UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema as UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutProjectMembershipsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProjectMembershipsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutProjectMembershipsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProjectMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutProjectMembershipsInput>;
export const UserCreateOrConnectWithoutProjectMembershipsInputObjectZodSchema = makeSchema();
