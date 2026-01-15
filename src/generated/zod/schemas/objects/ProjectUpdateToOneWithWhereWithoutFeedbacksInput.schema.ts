import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutFeedbacksInputObjectSchema as ProjectUpdateWithoutFeedbacksInputObjectSchema } from './ProjectUpdateWithoutFeedbacksInput.schema';
import { ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema as ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedUpdateWithoutFeedbacksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutFeedbacksInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutFeedbacksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutFeedbacksInput>;
export const ProjectUpdateToOneWithWhereWithoutFeedbacksInputObjectZodSchema = makeSchema();
