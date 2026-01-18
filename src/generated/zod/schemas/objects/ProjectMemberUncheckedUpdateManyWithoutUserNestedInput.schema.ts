import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberCreateWithoutUserInputObjectSchema as ProjectMemberCreateWithoutUserInputObjectSchema } from './ProjectMemberCreateWithoutUserInput.schema';
import { ProjectMemberUncheckedCreateWithoutUserInputObjectSchema as ProjectMemberUncheckedCreateWithoutUserInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutUserInput.schema';
import { ProjectMemberCreateOrConnectWithoutUserInputObjectSchema as ProjectMemberCreateOrConnectWithoutUserInputObjectSchema } from './ProjectMemberCreateOrConnectWithoutUserInput.schema';
import { ProjectMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema as ProjectMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProjectMemberUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProjectMemberCreateManyUserInputEnvelopeObjectSchema as ProjectMemberCreateManyUserInputEnvelopeObjectSchema } from './ProjectMemberCreateManyUserInputEnvelope.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema as ProjectMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProjectMemberUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProjectMemberUpdateManyWithWhereWithoutUserInputObjectSchema as ProjectMemberUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProjectMemberUpdateManyWithWhereWithoutUserInput.schema';
import { ProjectMemberScalarWhereInputObjectSchema as ProjectMemberScalarWhereInputObjectSchema } from './ProjectMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectMemberScalarWhereInputObjectSchema), z.lazy(() => ProjectMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput>;
export const ProjectMemberUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
