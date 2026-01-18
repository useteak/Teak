import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberCreateWithoutProjectInputObjectSchema as ProjectMemberCreateWithoutProjectInputObjectSchema } from './ProjectMemberCreateWithoutProjectInput.schema';
import { ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema as ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutProjectInput.schema';
import { ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema as ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectMemberCreateOrConnectWithoutProjectInput.schema';
import { ProjectMemberUpsertWithWhereUniqueWithoutProjectInputObjectSchema as ProjectMemberUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectMemberUpsertWithWhereUniqueWithoutProjectInput.schema';
import { ProjectMemberCreateManyProjectInputEnvelopeObjectSchema as ProjectMemberCreateManyProjectInputEnvelopeObjectSchema } from './ProjectMemberCreateManyProjectInputEnvelope.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema';
import { ProjectMemberUpdateWithWhereUniqueWithoutProjectInputObjectSchema as ProjectMemberUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectMemberUpdateWithWhereUniqueWithoutProjectInput.schema';
import { ProjectMemberUpdateManyWithWhereWithoutProjectInputObjectSchema as ProjectMemberUpdateManyWithWhereWithoutProjectInputObjectSchema } from './ProjectMemberUpdateManyWithWhereWithoutProjectInput.schema';
import { ProjectMemberScalarWhereInputObjectSchema as ProjectMemberScalarWhereInputObjectSchema } from './ProjectMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectMemberScalarWhereInputObjectSchema), z.lazy(() => ProjectMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectMemberUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberUpdateManyWithoutProjectNestedInput>;
export const ProjectMemberUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
