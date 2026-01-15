import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { FeedbackFindManySchema as FeedbackFindManySchema } from '../findManyFeedback.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  feedbacks: z.union([z.boolean(), z.lazy(() => FeedbackFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectSelectObjectSchema: z.ZodType<Prisma.ProjectSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSelect>;
export const ProjectSelectObjectZodSchema = makeSchema();
