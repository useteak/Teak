import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FeedbackOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FeedbackOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackOrderByRelationAggregateInput>;
export const FeedbackOrderByRelationAggregateInputObjectZodSchema = makeSchema();
