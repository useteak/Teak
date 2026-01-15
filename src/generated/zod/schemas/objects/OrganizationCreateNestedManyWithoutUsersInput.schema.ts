import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutUsersInputObjectSchema as OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema as OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema';
import { OrganizationCreateOrConnectWithoutUsersInputObjectSchema as OrganizationCreateOrConnectWithoutUsersInputObjectSchema } from './OrganizationCreateOrConnectWithoutUsersInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedManyWithoutUsersInput>;
export const OrganizationCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
