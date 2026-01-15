import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectUpdateWithoutFeedbacksInputObjectSchema as ProjectUpdateWithoutFeedbacksInputObjectSchema } from './ProjectUpdateWithoutFeedbacksInput.schema';
import { ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema as ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedUpdateWithoutFeedbacksInput.schema';
import { ProjectCreateWithoutFeedbacksInputObjectSchema as ProjectCreateWithoutFeedbacksInputObjectSchema } from './ProjectCreateWithoutFeedbacksInput.schema';
import { ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema as ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedCreateWithoutFeedbacksInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutFeedbacksInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutFeedbacksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutFeedbacksInput>;
export const ProjectUpsertWithoutFeedbacksInputObjectZodSchema = makeSchema();
