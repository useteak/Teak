import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateWithoutFeedbacksInputObjectSchema as ProjectCreateWithoutFeedbacksInputObjectSchema } from './ProjectCreateWithoutFeedbacksInput.schema';
import { ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema as ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedCreateWithoutFeedbacksInput.schema';
import { ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema as ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema } from './ProjectCreateOrConnectWithoutFeedbacksInput.schema';
import { ProjectUpsertWithoutFeedbacksInputObjectSchema as ProjectUpsertWithoutFeedbacksInputObjectSchema } from './ProjectUpsertWithoutFeedbacksInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutFeedbacksInputObjectSchema as ProjectUpdateToOneWithWhereWithoutFeedbacksInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutFeedbacksInput.schema';
import { ProjectUpdateWithoutFeedbacksInputObjectSchema as ProjectUpdateWithoutFeedbacksInputObjectSchema } from './ProjectUpdateWithoutFeedbacksInput.schema';
import { ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema as ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema } from './ProjectUncheckedUpdateWithoutFeedbacksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutFeedbacksInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutFeedbacksInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUpdateWithoutFeedbacksInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutFeedbacksInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutFeedbacksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutFeedbacksNestedInput>;
export const ProjectUpdateOneRequiredWithoutFeedbacksNestedInputObjectZodSchema = makeSchema();
