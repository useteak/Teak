import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackCreateNestedManyWithoutProjectInputObjectSchema as FeedbackCreateNestedManyWithoutProjectInputObjectSchema } from './FeedbackCreateNestedManyWithoutProjectInput.schema';
import { ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema as ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectMemberCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  rateLimitingEnabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  feedbacks: z.lazy(() => FeedbackCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  members: z.lazy(() => ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutOrganizationInput>;
export const ProjectCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
