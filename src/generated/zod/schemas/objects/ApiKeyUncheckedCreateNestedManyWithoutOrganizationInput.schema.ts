import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateWithoutOrganizationInputObjectSchema as ApiKeyCreateWithoutOrganizationInputObjectSchema } from './ApiKeyCreateWithoutOrganizationInput.schema';
import { ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema as ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOrganizationInput.schema';
import { ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema as ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema } from './ApiKeyCreateOrConnectWithoutOrganizationInput.schema';
import { ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema as ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema } from './ApiKeyCreateManyOrganizationInputEnvelope.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ApiKeyCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ApiKeyUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateNestedManyWithoutOrganizationInput>;
export const ApiKeyUncheckedCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
