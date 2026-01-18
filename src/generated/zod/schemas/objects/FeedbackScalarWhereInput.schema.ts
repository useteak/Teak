import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumFeedbackTypeFilterObjectSchema as EnumFeedbackTypeFilterObjectSchema } from './EnumFeedbackTypeFilter.schema';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const feedbackscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FeedbackScalarWhereInputObjectSchema), z.lazy(() => FeedbackScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FeedbackScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeedbackScalarWhereInputObjectSchema), z.lazy(() => FeedbackScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumFeedbackTypeFilterObjectSchema), FeedbackTypeSchema]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FeedbackScalarWhereInputObjectSchema: z.ZodType<Prisma.FeedbackScalarWhereInput> = feedbackscalarwhereinputSchema as unknown as z.ZodType<Prisma.FeedbackScalarWhereInput>;
export const FeedbackScalarWhereInputObjectZodSchema = feedbackscalarwhereinputSchema;
