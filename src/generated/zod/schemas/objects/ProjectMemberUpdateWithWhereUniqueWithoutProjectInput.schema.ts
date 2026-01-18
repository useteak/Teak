import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberUpdateWithoutProjectInputObjectSchema as ProjectMemberUpdateWithoutProjectInputObjectSchema } from './ProjectMemberUpdateWithoutProjectInput.schema';
import { ProjectMemberUncheckedUpdateWithoutProjectInputObjectSchema as ProjectMemberUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectMemberUpdateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectMemberUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutProjectInput>;
export const ProjectMemberUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
