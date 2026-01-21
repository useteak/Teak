import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrganizationScalarRelationFilterObjectSchema as OrganizationScalarRelationFilterObjectSchema } from './OrganizationScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const apikeywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  organization: z.union([z.lazy(() => OrganizationScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional()
}).strict();
export const ApiKeyWhereInputObjectSchema: z.ZodType<Prisma.ApiKeyWhereInput> = apikeywhereinputSchema as unknown as z.ZodType<Prisma.ApiKeyWhereInput>;
export const ApiKeyWhereInputObjectZodSchema = apikeywhereinputSchema;
