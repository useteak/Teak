import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const projectscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rateLimitingEnabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectScalarWhereInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereInput> = projectscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereInput>;
export const ProjectScalarWhereInputObjectZodSchema = projectscalarwhereinputSchema;
