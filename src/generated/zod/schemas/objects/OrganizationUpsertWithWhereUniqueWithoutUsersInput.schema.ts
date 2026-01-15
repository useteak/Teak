import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutUsersInputObjectSchema as OrganizationUpdateWithoutUsersInputObjectSchema } from './OrganizationUpdateWithoutUsersInput.schema';
import { OrganizationUncheckedUpdateWithoutUsersInputObjectSchema as OrganizationUncheckedUpdateWithoutUsersInputObjectSchema } from './OrganizationUncheckedUpdateWithoutUsersInput.schema';
import { OrganizationCreateWithoutUsersInputObjectSchema as OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema as OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrganizationUpdateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const OrganizationUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithWhereUniqueWithoutUsersInput>;
export const OrganizationUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
