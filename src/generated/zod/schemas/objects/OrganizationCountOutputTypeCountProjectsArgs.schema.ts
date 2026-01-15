import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountProjectsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountProjectsArgsObjectZodSchema = makeSchema();
