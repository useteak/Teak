import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProjectScalarRelationFilterObjectSchema as ProjectScalarRelationFilterObjectSchema } from './ProjectScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const projectmemberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectMemberWhereInputObjectSchema), z.lazy(() => ProjectMemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectMemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectMemberWhereInputObjectSchema), z.lazy(() => ProjectMemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notifyOnFeedback: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  project: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ProjectMemberWhereInputObjectSchema: z.ZodType<Prisma.ProjectMemberWhereInput> = projectmemberwhereinputSchema as unknown as z.ZodType<Prisma.ProjectMemberWhereInput>;
export const ProjectMemberWhereInputObjectZodSchema = projectmemberwhereinputSchema;
