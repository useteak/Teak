import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberCreateWithoutUserInputObjectSchema as ProjectMemberCreateWithoutUserInputObjectSchema } from './ProjectMemberCreateWithoutUserInput.schema';
import { ProjectMemberUncheckedCreateWithoutUserInputObjectSchema as ProjectMemberUncheckedCreateWithoutUserInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ProjectMemberCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutUserInput>;
export const ProjectMemberCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
