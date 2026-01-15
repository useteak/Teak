import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutFeedbacksInputObjectSchema as ProjectCreateWithoutFeedbacksInputObjectSchema } from './ProjectCreateWithoutFeedbacksInput.schema';
import { ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema as ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedCreateWithoutFeedbacksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutFeedbacksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutFeedbacksInput>;
export const ProjectCreateOrConnectWithoutFeedbacksInputObjectZodSchema = makeSchema();
