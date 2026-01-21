import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  organizationId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ApiKeyCreateManyInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateManyInput>;
export const ApiKeyCreateManyInputObjectZodSchema = makeSchema();
