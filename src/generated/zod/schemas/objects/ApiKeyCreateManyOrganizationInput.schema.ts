import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ApiKeyCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateManyOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateManyOrganizationInput>;
export const ApiKeyCreateManyOrganizationInputObjectZodSchema = makeSchema();
