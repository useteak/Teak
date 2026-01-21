import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutApiKeysInputObjectSchema as OrganizationCreateWithoutApiKeysInputObjectSchema } from './OrganizationCreateWithoutApiKeysInput.schema';
import { OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema as OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedCreateWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutApiKeysInput>;
export const OrganizationCreateOrConnectWithoutApiKeysInputObjectZodSchema = makeSchema();
