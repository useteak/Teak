import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountUsersArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountUsersArgsObjectZodSchema = makeSchema();
