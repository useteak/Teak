import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProjectMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMaxAggregateInputType>;
export const ProjectMaxAggregateInputObjectZodSchema = makeSchema();
