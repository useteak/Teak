import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  label: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ApiKeyMaxAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyMaxAggregateInputType>;
export const ApiKeyMaxAggregateInputObjectZodSchema = makeSchema();
