import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  organizationId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ApiKeyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateInput>;
export const ApiKeyUncheckedCreateInputObjectZodSchema = makeSchema();
