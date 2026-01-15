import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  type: z.literal(true).optional(),
  email: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const FeedbackMinAggregateInputObjectSchema: z.ZodType<Prisma.FeedbackMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackMinAggregateInputType>;
export const FeedbackMinAggregateInputObjectZodSchema = makeSchema();
