import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const projectmemberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectMemberScalarWhereInputObjectSchema), z.lazy(() => ProjectMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectMemberScalarWhereInputObjectSchema), z.lazy(() => ProjectMemberScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notifyOnFeedback: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.ProjectMemberScalarWhereInput> = projectmemberscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProjectMemberScalarWhereInput>;
export const ProjectMemberScalarWhereInputObjectZodSchema = projectmemberscalarwhereinputSchema;
