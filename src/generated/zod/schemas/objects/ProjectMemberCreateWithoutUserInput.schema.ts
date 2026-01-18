import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateNestedOneWithoutMembersInputObjectSchema as ProjectCreateNestedOneWithoutMembersInputObjectSchema } from './ProjectCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notifyOnFeedback: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const ProjectMemberCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateWithoutUserInput>;
export const ProjectMemberCreateWithoutUserInputObjectZodSchema = makeSchema();
