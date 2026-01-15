import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateWithoutOrganizationInputObjectSchema as ProjectCreateWithoutOrganizationInputObjectSchema } from './ProjectCreateWithoutOrganizationInput.schema';
import { ProjectUncheckedCreateWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateWithoutOrganizationInput.schema';
import { ProjectCreateOrConnectWithoutOrganizationInputObjectSchema as ProjectCreateOrConnectWithoutOrganizationInputObjectSchema } from './ProjectCreateOrConnectWithoutOrganizationInput.schema';
import { ProjectCreateManyOrganizationInputEnvelopeObjectSchema as ProjectCreateManyOrganizationInputEnvelopeObjectSchema } from './ProjectCreateManyOrganizationInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput>;
export const ProjectUncheckedCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
