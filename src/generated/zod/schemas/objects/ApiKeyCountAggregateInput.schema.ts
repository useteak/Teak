import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  label: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ApiKeyCountAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCountAggregateInputType>;
export const ApiKeyCountAggregateInputObjectZodSchema = makeSchema();
