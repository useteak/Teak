import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyOrganizationInput>;
export const ProjectCreateManyOrganizationInputObjectZodSchema = makeSchema();
