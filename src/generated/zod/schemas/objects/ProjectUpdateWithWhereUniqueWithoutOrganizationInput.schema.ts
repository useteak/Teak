import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutOrganizationInputObjectSchema as ProjectUpdateWithoutOrganizationInputObjectSchema } from './ProjectUpdateWithoutOrganizationInput.schema';
import { ProjectUncheckedUpdateWithoutOrganizationInputObjectSchema as ProjectUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ProjectUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ProjectUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutOrganizationInput>;
export const ProjectUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
