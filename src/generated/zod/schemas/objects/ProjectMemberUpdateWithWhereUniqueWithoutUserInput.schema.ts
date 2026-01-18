import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberUpdateWithoutUserInputObjectSchema as ProjectMemberUpdateWithoutUserInputObjectSchema } from './ProjectMemberUpdateWithoutUserInput.schema';
import { ProjectMemberUncheckedUpdateWithoutUserInputObjectSchema as ProjectMemberUncheckedUpdateWithoutUserInputObjectSchema } from './ProjectMemberUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ProjectMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutUserInput>;
export const ProjectMemberUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
