import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './FeedbackWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedbackWhereInputObjectSchema).optional()
}).strict();
export const ProjectCountOutputTypeCountFeedbacksArgsObjectSchema = makeSchema();
export const ProjectCountOutputTypeCountFeedbacksArgsObjectZodSchema = makeSchema();
