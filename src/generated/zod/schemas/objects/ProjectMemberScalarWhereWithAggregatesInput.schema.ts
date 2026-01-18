import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const projectmemberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  notifyOnFeedback: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProjectMemberScalarWhereWithAggregatesInput> = projectmemberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProjectMemberScalarWhereWithAggregatesInput>;
export const ProjectMemberScalarWhereWithAggregatesInputObjectZodSchema = projectmemberscalarwherewithaggregatesinputSchema;
