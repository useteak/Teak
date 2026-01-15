import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectScalarWhereInputObjectSchema as ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';
import { ProjectUpdateManyMutationInputObjectSchema as ProjectUpdateManyMutationInputObjectSchema } from './ProjectUpdateManyMutationInput.schema';
import { ProjectUncheckedUpdateManyWithoutOrganizationInputObjectSchema as ProjectUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const ProjectUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutOrganizationInput>;
export const ProjectUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
