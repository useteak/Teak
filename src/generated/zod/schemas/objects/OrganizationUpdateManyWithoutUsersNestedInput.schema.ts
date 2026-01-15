import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutUsersInputObjectSchema as OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema as OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema';
import { OrganizationCreateOrConnectWithoutUsersInputObjectSchema as OrganizationCreateOrConnectWithoutUsersInputObjectSchema } from './OrganizationCreateOrConnectWithoutUsersInput.schema';
import { OrganizationUpsertWithWhereUniqueWithoutUsersInputObjectSchema as OrganizationUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './OrganizationUpsertWithWhereUniqueWithoutUsersInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithWhereUniqueWithoutUsersInputObjectSchema as OrganizationUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './OrganizationUpdateWithWhereUniqueWithoutUsersInput.schema';
import { OrganizationUpdateManyWithWhereWithoutUsersInputObjectSchema as OrganizationUpdateManyWithWhereWithoutUsersInputObjectSchema } from './OrganizationUpdateManyWithWhereWithoutUsersInput.schema';
import { OrganizationScalarWhereInputObjectSchema as OrganizationScalarWhereInputObjectSchema } from './OrganizationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganizationUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganizationUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganizationScalarWhereInputObjectSchema), z.lazy(() => OrganizationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateManyWithoutUsersNestedInput>;
export const OrganizationUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
