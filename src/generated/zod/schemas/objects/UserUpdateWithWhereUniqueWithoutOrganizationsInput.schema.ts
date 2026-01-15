import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrganizationsInputObjectSchema as UserUpdateWithoutOrganizationsInputObjectSchema } from './UserUpdateWithoutOrganizationsInput.schema';
import { UserUncheckedUpdateWithoutOrganizationsInputObjectSchema as UserUncheckedUpdateWithoutOrganizationsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutOrganizationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationsInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutOrganizationsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutOrganizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutOrganizationsInput>;
export const UserUpdateWithWhereUniqueWithoutOrganizationsInputObjectZodSchema = makeSchema();
