import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumFeedbackTypeWithAggregatesFilterObjectSchema as EnumFeedbackTypeWithAggregatesFilterObjectSchema } from './EnumFeedbackTypeWithAggregatesFilter.schema';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const feedbackscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FeedbackScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FeedbackScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FeedbackScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeedbackScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FeedbackScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumFeedbackTypeWithAggregatesFilterObjectSchema), FeedbackTypeSchema]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  projectId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FeedbackScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FeedbackScalarWhereWithAggregatesInput> = feedbackscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FeedbackScalarWhereWithAggregatesInput>;
export const FeedbackScalarWhereWithAggregatesInputObjectZodSchema = feedbackscalarwherewithaggregatesinputSchema;
