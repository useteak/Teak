import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectUpdateWithoutMembersInputObjectSchema as ProjectUpdateWithoutMembersInputObjectSchema } from './ProjectUpdateWithoutMembersInput.schema';
import { ProjectUncheckedUpdateWithoutMembersInputObjectSchema as ProjectUncheckedUpdateWithoutMembersInputObjectSchema } from './ProjectUncheckedUpdateWithoutMembersInput.schema';
import { ProjectCreateWithoutMembersInputObjectSchema as ProjectCreateWithoutMembersInputObjectSchema } from './ProjectCreateWithoutMembersInput.schema';
import { ProjectUncheckedCreateWithoutMembersInputObjectSchema as ProjectUncheckedCreateWithoutMembersInputObjectSchema } from './ProjectUncheckedCreateWithoutMembersInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutMembersInput>;
export const ProjectUpsertWithoutMembersInputObjectZodSchema = makeSchema();
