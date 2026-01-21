import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const apikeyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ApiKeyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput> = apikeyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput>;
export const ApiKeyScalarWhereWithAggregatesInputObjectZodSchema = apikeyscalarwherewithaggregatesinputSchema;
