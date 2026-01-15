import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutOrganizationsInputObjectSchema as UserUncheckedUpdateManyWithoutOrganizationsInputObjectSchema } from './UserUncheckedUpdateManyWithoutOrganizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationsInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutOrganizationsInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutOrganizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutOrganizationsInput>;
export const UserUpdateManyWithWhereWithoutOrganizationsInputObjectZodSchema = makeSchema();
