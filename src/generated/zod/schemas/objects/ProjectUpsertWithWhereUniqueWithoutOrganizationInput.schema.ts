import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutOrganizationInputObjectSchema as ProjectUpdateWithoutOrganizationInputObjectSchema } from './ProjectUpdateWithoutOrganizationInput.schema';
import { ProjectUncheckedUpdateWithoutOrganizationInputObjectSchema as ProjectUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ProjectUncheckedUpdateWithoutOrganizationInput.schema';
import { ProjectCreateWithoutOrganizationInputObjectSchema as ProjectCreateWithoutOrganizationInputObjectSchema } from './ProjectCreateWithoutOrganizationInput.schema';
import { ProjectUncheckedCreateWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ProjectUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutOrganizationInput>;
export const ProjectUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
