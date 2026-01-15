import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const FeedbackIncludeObjectSchema: z.ZodType<Prisma.FeedbackInclude> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackInclude>;
export const FeedbackIncludeObjectZodSchema = makeSchema();
