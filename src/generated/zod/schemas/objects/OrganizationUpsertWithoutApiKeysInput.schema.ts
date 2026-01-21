import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutApiKeysInputObjectSchema as OrganizationUpdateWithoutApiKeysInputObjectSchema } from './OrganizationUpdateWithoutApiKeysInput.schema';
import { OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema as OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedUpdateWithoutApiKeysInput.schema';
import { OrganizationCreateWithoutApiKeysInputObjectSchema as OrganizationCreateWithoutApiKeysInputObjectSchema } from './OrganizationCreateWithoutApiKeysInput.schema';
import { OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema as OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedCreateWithoutApiKeysInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutApiKeysInput>;
export const OrganizationUpsertWithoutApiKeysInputObjectZodSchema = makeSchema();
