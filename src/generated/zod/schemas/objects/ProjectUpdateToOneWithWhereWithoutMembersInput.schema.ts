import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutMembersInputObjectSchema as ProjectUpdateWithoutMembersInputObjectSchema } from './ProjectUpdateWithoutMembersInput.schema';
import { ProjectUncheckedUpdateWithoutMembersInputObjectSchema as ProjectUncheckedUpdateWithoutMembersInputObjectSchema } from './ProjectUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutMembersInput>;
export const ProjectUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
