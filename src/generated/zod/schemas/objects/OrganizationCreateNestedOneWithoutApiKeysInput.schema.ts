import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutApiKeysInputObjectSchema as OrganizationCreateWithoutApiKeysInputObjectSchema } from './OrganizationCreateWithoutApiKeysInput.schema';
import { OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema as OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedCreateWithoutApiKeysInput.schema';
import { OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema as OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema } from './OrganizationCreateOrConnectWithoutApiKeysInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutApiKeysInput>;
export const OrganizationCreateNestedOneWithoutApiKeysInputObjectZodSchema = makeSchema();
