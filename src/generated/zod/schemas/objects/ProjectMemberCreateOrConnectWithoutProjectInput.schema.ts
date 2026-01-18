import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberCreateWithoutProjectInputObjectSchema as ProjectMemberCreateWithoutProjectInputObjectSchema } from './ProjectMemberCreateWithoutProjectInput.schema';
import { ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema as ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutProjectInput>;
export const ProjectMemberCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
