import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyCreateWithoutOrganizationInputObjectSchema as ApiKeyCreateWithoutOrganizationInputObjectSchema } from './ApiKeyCreateWithoutOrganizationInput.schema';
import { ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema as ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ApiKeyCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ApiKeyCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutOrganizationInput>;
export const ApiKeyCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
