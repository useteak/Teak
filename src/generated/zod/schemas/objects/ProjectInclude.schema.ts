import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { FeedbackFindManySchema as FeedbackFindManySchema } from '../findManyFeedback.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  feedbacks: z.union([z.boolean(), z.lazy(() => FeedbackFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectIncludeObjectSchema: z.ZodType<Prisma.ProjectInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectInclude>;
export const ProjectIncludeObjectZodSchema = makeSchema();
