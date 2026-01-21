import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutApiKeysInputObjectSchema as OrganizationCreateWithoutApiKeysInputObjectSchema } from './OrganizationCreateWithoutApiKeysInput.schema';
import { OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema as OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedCreateWithoutApiKeysInput.schema';
import { OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema as OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema } from './OrganizationCreateOrConnectWithoutApiKeysInput.schema';
import { OrganizationUpsertWithoutApiKeysInputObjectSchema as OrganizationUpsertWithoutApiKeysInputObjectSchema } from './OrganizationUpsertWithoutApiKeysInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutApiKeysInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutApiKeysInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutApiKeysInput.schema';
import { OrganizationUpdateWithoutApiKeysInputObjectSchema as OrganizationUpdateWithoutApiKeysInputObjectSchema } from './OrganizationUpdateWithoutApiKeysInput.schema';
import { OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema as OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema } from './OrganizationUncheckedUpdateWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutApiKeysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutApiKeysInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutApiKeysInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutApiKeysInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutApiKeysInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutApiKeysNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutApiKeysNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutApiKeysNestedInput>;
export const OrganizationUpdateOneRequiredWithoutApiKeysNestedInputObjectZodSchema = makeSchema();
