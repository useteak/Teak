import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrganizationsInputObjectSchema as UserCreateWithoutOrganizationsInputObjectSchema } from './UserCreateWithoutOrganizationsInput.schema';
import { UserUncheckedCreateWithoutOrganizationsInputObjectSchema as UserUncheckedCreateWithoutOrganizationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationsInput.schema';
import { UserCreateOrConnectWithoutOrganizationsInputObjectSchema as UserCreateOrConnectWithoutOrganizationsInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserCreateWithoutOrganizationsInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutOrganizationsInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutOrganizationsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutOrganizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutOrganizationsInput>;
export const UserUncheckedCreateNestedManyWithoutOrganizationsInputObjectZodSchema = makeSchema();
