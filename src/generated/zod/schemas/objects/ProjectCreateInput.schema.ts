import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutProjectsInputObjectSchema as OrganizationCreateNestedOneWithoutProjectsInputObjectSchema } from './OrganizationCreateNestedOneWithoutProjectsInput.schema';
import { FeedbackCreateNestedManyWithoutProjectInputObjectSchema as FeedbackCreateNestedManyWithoutProjectInputObjectSchema } from './FeedbackCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutProjectsInputObjectSchema),
  feedbacks: z.lazy(() => FeedbackCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = makeSchema();
