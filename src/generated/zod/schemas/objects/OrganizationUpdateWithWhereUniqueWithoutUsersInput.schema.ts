import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutUsersInputObjectSchema as OrganizationUpdateWithoutUsersInputObjectSchema } from './OrganizationUpdateWithoutUsersInput.schema';
import { OrganizationUncheckedUpdateWithoutUsersInputObjectSchema as OrganizationUncheckedUpdateWithoutUsersInputObjectSchema } from './OrganizationUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const OrganizationUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithWhereUniqueWithoutUsersInput>;
export const OrganizationUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
