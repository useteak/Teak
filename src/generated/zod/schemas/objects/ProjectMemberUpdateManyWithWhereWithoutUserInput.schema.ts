import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberScalarWhereInputObjectSchema as ProjectMemberScalarWhereInputObjectSchema } from './ProjectMemberScalarWhereInput.schema';
import { ProjectMemberUpdateManyMutationInputObjectSchema as ProjectMemberUpdateManyMutationInputObjectSchema } from './ProjectMemberUpdateManyMutationInput.schema';
import { ProjectMemberUncheckedUpdateManyWithoutUserInputObjectSchema as ProjectMemberUncheckedUpdateManyWithoutUserInputObjectSchema } from './ProjectMemberUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectMemberUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ProjectMemberUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutUserInput>;
export const ProjectMemberUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
