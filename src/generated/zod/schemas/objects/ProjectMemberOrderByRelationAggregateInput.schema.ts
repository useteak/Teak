import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProjectMemberOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMemberOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberOrderByRelationAggregateInput>;
export const ProjectMemberOrderByRelationAggregateInputObjectZodSchema = makeSchema();
