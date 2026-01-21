import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const apikeyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ApiKeyScalarWhereInputObjectSchema: z.ZodType<Prisma.ApiKeyScalarWhereInput> = apikeyscalarwhereinputSchema as unknown as z.ZodType<Prisma.ApiKeyScalarWhereInput>;
export const ApiKeyScalarWhereInputObjectZodSchema = apikeyscalarwhereinputSchema;
