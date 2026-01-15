import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateWithoutFeedbacksInputObjectSchema as ProjectCreateWithoutFeedbacksInputObjectSchema } from './ProjectCreateWithoutFeedbacksInput.schema';
import { ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema as ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedCreateWithoutFeedbacksInput.schema';
import { ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema as ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema } from './ProjectCreateOrConnectWithoutFeedbacksInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutFeedbacksInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutFeedbacksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutFeedbacksInput>;
export const ProjectCreateNestedOneWithoutFeedbacksInputObjectZodSchema = makeSchema();
