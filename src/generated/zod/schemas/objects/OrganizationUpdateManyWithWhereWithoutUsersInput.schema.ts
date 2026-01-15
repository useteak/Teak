import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationScalarWhereInputObjectSchema as OrganizationScalarWhereInputObjectSchema } from './OrganizationScalarWhereInput.schema';
import { OrganizationUpdateManyMutationInputObjectSchema as OrganizationUpdateManyMutationInputObjectSchema } from './OrganizationUpdateManyMutationInput.schema';
import { OrganizationUncheckedUpdateManyWithoutUsersInputObjectSchema as OrganizationUncheckedUpdateManyWithoutUsersInputObjectSchema } from './OrganizationUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationUpdateManyMutationInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const OrganizationUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateManyWithWhereWithoutUsersInput>;
export const OrganizationUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
