import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutProjectsInputObjectSchema as OrganizationCreateNestedOneWithoutProjectsInputObjectSchema } from './OrganizationCreateNestedOneWithoutProjectsInput.schema';
import { FeedbackCreateNestedManyWithoutProjectInputObjectSchema as FeedbackCreateNestedManyWithoutProjectInputObjectSchema } from './FeedbackCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  rateLimitingEnabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutProjectsInputObjectSchema),
  feedbacks: z.lazy(() => FeedbackCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutMembersInput>;
export const ProjectCreateWithoutMembersInputObjectZodSchema = makeSchema();
