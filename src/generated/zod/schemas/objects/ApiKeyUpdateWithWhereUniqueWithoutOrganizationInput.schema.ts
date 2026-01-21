import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutOrganizationInputObjectSchema as ApiKeyUpdateWithoutOrganizationInputObjectSchema } from './ApiKeyUpdateWithoutOrganizationInput.schema';
import { ApiKeyUncheckedUpdateWithoutOrganizationInputObjectSchema as ApiKeyUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ApiKeyUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ApiKeyUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutOrganizationInput>;
export const ApiKeyUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
