import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutApiKeysInputObjectSchema as OrganizationUpdateWithoutApiKeysInputObjectSchema } from './OrganizationUpdateWithoutApiKeysInput.schema';
import { OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema as OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedUpdateWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutApiKeysInput>;
export const OrganizationUpdateToOneWithWhereWithoutApiKeysInputObjectZodSchema = makeSchema();
