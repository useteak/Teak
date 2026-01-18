import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  email: z.boolean().optional(),
  metadata: z.boolean().optional(),
  projectId: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const FeedbackSelectObjectSchema: z.ZodType<Prisma.FeedbackSelect> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackSelect>;
export const FeedbackSelectObjectZodSchema = makeSchema();
