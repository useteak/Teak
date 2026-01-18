import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberScalarWhereInputObjectSchema as ProjectMemberScalarWhereInputObjectSchema } from './ProjectMemberScalarWhereInput.schema';
import { ProjectMemberUpdateManyMutationInputObjectSchema as ProjectMemberUpdateManyMutationInputObjectSchema } from './ProjectMemberUpdateManyMutationInput.schema';
import { ProjectMemberUncheckedUpdateManyWithoutProjectInputObjectSchema as ProjectMemberUncheckedUpdateManyWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectMemberUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectMemberUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutProjectInput>;
export const ProjectMemberUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
