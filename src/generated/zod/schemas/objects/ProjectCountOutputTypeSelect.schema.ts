import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCountOutputTypeCountFeedbacksArgsObjectSchema as ProjectCountOutputTypeCountFeedbacksArgsObjectSchema } from './ProjectCountOutputTypeCountFeedbacksArgs.schema'

const makeSchema = () => z.object({
  feedbacks: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountFeedbacksArgsObjectSchema)]).optional()
}).strict();
export const ProjectCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCountOutputTypeSelect>;
export const ProjectCountOutputTypeSelectObjectZodSchema = makeSchema();
