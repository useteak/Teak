import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyScalarWhereInputObjectSchema as ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema';
import { ApiKeyUpdateManyMutationInputObjectSchema as ApiKeyUpdateManyMutationInputObjectSchema } from './ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutOrganizationInputObjectSchema as ApiKeyUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ApiKeyUpdateManyMutationInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const ApiKeyUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutOrganizationInput>;
export const ApiKeyUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
