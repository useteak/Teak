import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutProjectMembershipsInputObjectSchema as UserUpdateWithoutProjectMembershipsInputObjectSchema } from './UserUpdateWithoutProjectMembershipsInput.schema';
import { UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema as UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema } from './UserUncheckedUpdateWithoutProjectMembershipsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutProjectMembershipsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProjectMembershipsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutProjectMembershipsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProjectMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProjectMembershipsInput>;
export const UserUpdateToOneWithWhereWithoutProjectMembershipsInputObjectZodSchema = makeSchema();
