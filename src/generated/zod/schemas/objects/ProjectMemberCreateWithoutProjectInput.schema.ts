import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema as UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema } from './UserCreateNestedOneWithoutProjectMembershipsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notifyOnFeedback: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProjectMembershipsInputObjectSchema)
}).strict();
export const ProjectMemberCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateWithoutProjectInput>;
export const ProjectMemberCreateWithoutProjectInputObjectZodSchema = makeSchema();
