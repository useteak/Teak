import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberUpdateWithoutProjectInputObjectSchema as ProjectMemberUpdateWithoutProjectInputObjectSchema } from './ProjectMemberUpdateWithoutProjectInput.schema';
import { ProjectMemberUncheckedUpdateWithoutProjectInputObjectSchema as ProjectMemberUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedUpdateWithoutProjectInput.schema';
import { ProjectMemberCreateWithoutProjectInputObjectSchema as ProjectMemberCreateWithoutProjectInputObjectSchema } from './ProjectMemberCreateWithoutProjectInput.schema';
import { ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema as ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectMemberUpdateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectMemberUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutProjectInput>;
export const ProjectMemberUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
