import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateManyOrganizationInputObjectSchema as ApiKeyCreateManyOrganizationInputObjectSchema } from './ApiKeyCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ApiKeyCreateManyOrganizationInputObjectSchema), z.lazy(() => ApiKeyCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ApiKeyCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.ApiKeyCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateManyOrganizationInputEnvelope>;
export const ApiKeyCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
