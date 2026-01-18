import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberCreateManyProjectInputObjectSchema as ProjectMemberCreateManyProjectInputObjectSchema } from './ProjectMemberCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectMemberCreateManyProjectInputObjectSchema), z.lazy(() => ProjectMemberCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectMemberCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectMemberCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateManyProjectInputEnvelope>;
export const ProjectMemberCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
