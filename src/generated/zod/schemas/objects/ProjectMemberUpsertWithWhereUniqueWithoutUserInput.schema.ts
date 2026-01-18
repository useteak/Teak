import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberUpdateWithoutUserInputObjectSchema as ProjectMemberUpdateWithoutUserInputObjectSchema } from './ProjectMemberUpdateWithoutUserInput.schema';
import { ProjectMemberUncheckedUpdateWithoutUserInputObjectSchema as ProjectMemberUncheckedUpdateWithoutUserInputObjectSchema } from './ProjectMemberUncheckedUpdateWithoutUserInput.schema';
import { ProjectMemberCreateWithoutUserInputObjectSchema as ProjectMemberCreateWithoutUserInputObjectSchema } from './ProjectMemberCreateWithoutUserInput.schema';
import { ProjectMemberUncheckedCreateWithoutUserInputObjectSchema as ProjectMemberUncheckedCreateWithoutUserInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ProjectMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutUserInput>;
export const ProjectMemberUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
