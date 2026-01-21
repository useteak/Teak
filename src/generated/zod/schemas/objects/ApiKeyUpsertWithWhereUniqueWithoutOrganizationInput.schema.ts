import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutOrganizationInputObjectSchema as ApiKeyUpdateWithoutOrganizationInputObjectSchema } from './ApiKeyUpdateWithoutOrganizationInput.schema';
import { ApiKeyUncheckedUpdateWithoutOrganizationInputObjectSchema as ApiKeyUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutOrganizationInput.schema';
import { ApiKeyCreateWithoutOrganizationInputObjectSchema as ApiKeyCreateWithoutOrganizationInputObjectSchema } from './ApiKeyCreateWithoutOrganizationInput.schema';
import { ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema as ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ApiKeyUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => ApiKeyCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ApiKeyUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutOrganizationInput>;
export const ApiKeyUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
