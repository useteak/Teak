import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumFeedbackTypeFilterObjectSchema as EnumFeedbackTypeFilterObjectSchema } from './EnumFeedbackTypeFilter.schema';
import { FeedbackTypeSchema } from '../enums/FeedbackType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProjectScalarRelationFilterObjectSchema as ProjectScalarRelationFilterObjectSchema } from './ProjectScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const feedbackwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FeedbackWhereInputObjectSchema), z.lazy(() => FeedbackWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FeedbackWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeedbackWhereInputObjectSchema), z.lazy(() => FeedbackWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumFeedbackTypeFilterObjectSchema), FeedbackTypeSchema]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  project: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional()
}).strict();
export const FeedbackWhereInputObjectSchema: z.ZodType<Prisma.FeedbackWhereInput> = feedbackwhereinputSchema as unknown as z.ZodType<Prisma.FeedbackWhereInput>;
export const FeedbackWhereInputObjectZodSchema = feedbackwhereinputSchema;
