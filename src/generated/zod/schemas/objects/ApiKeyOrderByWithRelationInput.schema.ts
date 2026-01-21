import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ApiKeyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ApiKeyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyOrderByWithRelationInput>;
export const ApiKeyOrderByWithRelationInputObjectZodSchema = makeSchema();
