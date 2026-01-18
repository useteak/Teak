import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  type: z.literal(true).optional(),
  email: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FeedbackCountAggregateInputObjectSchema: z.ZodType<Prisma.FeedbackCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCountAggregateInputType>;
export const FeedbackCountAggregateInputObjectZodSchema = makeSchema();
