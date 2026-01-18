import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberCreateManyUserInputObjectSchema as ProjectMemberCreateManyUserInputObjectSchema } from './ProjectMemberCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectMemberCreateManyUserInputObjectSchema), z.lazy(() => ProjectMemberCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectMemberCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectMemberCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateManyUserInputEnvelope>;
export const ProjectMemberCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
