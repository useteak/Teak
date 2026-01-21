import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ApiKeyCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateWithoutOrganizationInput>;
export const ApiKeyCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
