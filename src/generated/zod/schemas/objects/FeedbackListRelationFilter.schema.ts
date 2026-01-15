import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './FeedbackWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FeedbackWhereInputObjectSchema).optional(),
  some: z.lazy(() => FeedbackWhereInputObjectSchema).optional(),
  none: z.lazy(() => FeedbackWhereInputObjectSchema).optional()
}).strict();
export const FeedbackListRelationFilterObjectSchema: z.ZodType<Prisma.FeedbackListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackListRelationFilter>;
export const FeedbackListRelationFilterObjectZodSchema = makeSchema();
