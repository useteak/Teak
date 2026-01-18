import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutProjectsInputObjectSchema as OrganizationCreateNestedOneWithoutProjectsInputObjectSchema } from './OrganizationCreateNestedOneWithoutProjectsInput.schema';
import { FeedbackCreateNestedManyWithoutProjectInputObjectSchema as FeedbackCreateNestedManyWithoutProjectInputObjectSchema } from './FeedbackCreateNestedManyWithoutProjectInput.schema';
import { ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema as ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectMemberCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  rateLimitingEnabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutProjectsInputObjectSchema),
  feedbacks: z.lazy(() => FeedbackCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  members: z.lazy(() => ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = makeSchema();
