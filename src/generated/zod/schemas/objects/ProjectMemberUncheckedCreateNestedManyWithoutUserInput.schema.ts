import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberCreateWithoutUserInputObjectSchema as ProjectMemberCreateWithoutUserInputObjectSchema } from './ProjectMemberCreateWithoutUserInput.schema';
import { ProjectMemberUncheckedCreateWithoutUserInputObjectSchema as ProjectMemberUncheckedCreateWithoutUserInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutUserInput.schema';
import { ProjectMemberCreateOrConnectWithoutUserInputObjectSchema as ProjectMemberCreateOrConnectWithoutUserInputObjectSchema } from './ProjectMemberCreateOrConnectWithoutUserInput.schema';
import { ProjectMemberCreateManyUserInputEnvelopeObjectSchema as ProjectMemberCreateManyUserInputEnvelopeObjectSchema } from './ProjectMemberCreateManyUserInputEnvelope.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput>;
export const ProjectMemberUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
