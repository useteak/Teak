import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereInputObjectSchema as ProjectMemberWhereInputObjectSchema } from './ProjectMemberWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountProjectMembershipsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountProjectMembershipsArgsObjectZodSchema = makeSchema();
