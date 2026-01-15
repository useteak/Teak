import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateWithoutOrganizationInputObjectSchema as ProjectCreateWithoutOrganizationInputObjectSchema } from './ProjectCreateWithoutOrganizationInput.schema';
import { ProjectUncheckedCreateWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateWithoutOrganizationInput.schema';
import { ProjectCreateOrConnectWithoutOrganizationInputObjectSchema as ProjectCreateOrConnectWithoutOrganizationInputObjectSchema } from './ProjectCreateOrConnectWithoutOrganizationInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as ProjectUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { ProjectCreateManyOrganizationInputEnvelopeObjectSchema as ProjectCreateManyOrganizationInputEnvelopeObjectSchema } from './ProjectCreateManyOrganizationInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as ProjectUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { ProjectUpdateManyWithWhereWithoutOrganizationInputObjectSchema as ProjectUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutOrganizationInput.schema';
import { ProjectScalarWhereInputObjectSchema as ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateManyWithoutOrganizationNestedInput>;
export const ProjectUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
