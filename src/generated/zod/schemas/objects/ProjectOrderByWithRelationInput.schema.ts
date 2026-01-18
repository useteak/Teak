import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { FeedbackOrderByRelationAggregateInputObjectSchema as FeedbackOrderByRelationAggregateInputObjectSchema } from './FeedbackOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  rateLimitingEnabled: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  feedbacks: z.lazy(() => FeedbackOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectOrderByWithRelationInput>;
export const ProjectOrderByWithRelationInputObjectZodSchema = makeSchema();
