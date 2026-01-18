import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateNestedOneWithoutMembersInputObjectSchema as ProjectCreateNestedOneWithoutMembersInputObjectSchema } from './ProjectCreateNestedOneWithoutMembersInput.schema';
import { UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema as UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema } from './UserCreateNestedOneWithoutProjectMembershipsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notifyOnFeedback: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutMembersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema)
}).strict();
export const ProjectMemberCreateInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateInput>;
export const ProjectMemberCreateInputObjectZodSchema = makeSchema();
