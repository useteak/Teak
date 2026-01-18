import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutMembersInputObjectSchema as ProjectCreateWithoutMembersInputObjectSchema } from './ProjectCreateWithoutMembersInput.schema';
import { ProjectUncheckedCreateWithoutMembersInputObjectSchema as ProjectUncheckedCreateWithoutMembersInputObjectSchema } from './ProjectUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutMembersInput>;
export const ProjectCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();
