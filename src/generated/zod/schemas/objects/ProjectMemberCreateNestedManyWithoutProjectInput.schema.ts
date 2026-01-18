import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectMemberCreateWithoutProjectInputObjectSchema as ProjectMemberCreateWithoutProjectInputObjectSchema } from './ProjectMemberCreateWithoutProjectInput.schema';
import { ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema as ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectMemberUncheckedCreateWithoutProjectInput.schema';
import { ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema as ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectMemberCreateOrConnectWithoutProjectInput.schema';
import { ProjectMemberCreateManyProjectInputEnvelopeObjectSchema as ProjectMemberCreateManyProjectInputEnvelopeObjectSchema } from './ProjectMemberCreateManyProjectInputEnvelope.schema';
import { ProjectMemberWhereUniqueInputObjectSchema as ProjectMemberWhereUniqueInputObjectSchema } from './ProjectMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectMemberCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema), z.lazy(() => ProjectMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectMemberCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectMemberCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMemberCreateNestedManyWithoutProjectInput>;
export const ProjectMemberCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
