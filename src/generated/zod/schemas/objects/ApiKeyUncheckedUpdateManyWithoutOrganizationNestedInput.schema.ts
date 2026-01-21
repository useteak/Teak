import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateWithoutOrganizationInputObjectSchema as ApiKeyCreateWithoutOrganizationInputObjectSchema } from './ApiKeyCreateWithoutOrganizationInput.schema';
import { ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema as ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOrganizationInput.schema';
import { ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema as ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema } from './ApiKeyCreateOrConnectWithoutOrganizationInput.schema';
import { ApiKeyUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as ApiKeyUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ApiKeyUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema as ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema } from './ApiKeyCreateManyOrganizationInputEnvelope.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as ApiKeyUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ApiKeyUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { ApiKeyUpdateManyWithWhereWithoutOrganizationInputObjectSchema as ApiKeyUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './ApiKeyUpdateManyWithWhereWithoutOrganizationInput.schema';
import { ApiKeyScalarWhereInputObjectSchema as ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ApiKeyCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ApiKeyUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const ApiKeyUncheckedUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
