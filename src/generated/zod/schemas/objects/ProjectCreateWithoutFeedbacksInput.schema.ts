import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutProjectsInputObjectSchema as OrganizationCreateNestedOneWithoutProjectsInputObjectSchema } from './OrganizationCreateNestedOneWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutProjectsInputObjectSchema)
}).strict();
export const ProjectCreateWithoutFeedbacksInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutFeedbacksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutFeedbacksInput>;
export const ProjectCreateWithoutFeedbacksInputObjectZodSchema = makeSchema();
