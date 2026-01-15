import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateManyOrganizationInputObjectSchema as ProjectCreateManyOrganizationInputObjectSchema } from './ProjectCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectCreateManyOrganizationInputObjectSchema), z.lazy(() => ProjectCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateManyOrganizationInputEnvelope>;
export const ProjectCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
