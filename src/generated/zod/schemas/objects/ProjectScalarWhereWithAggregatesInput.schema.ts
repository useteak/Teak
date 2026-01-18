import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const projectscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rateLimitingEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  organizationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = projectscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput>;
export const ProjectScalarWhereWithAggregatesInputObjectZodSchema = projectscalarwherewithaggregatesinputSchema;
