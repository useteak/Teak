import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutOrganizationInputObjectSchema as ProjectCreateWithoutOrganizationInputObjectSchema } from './ProjectCreateWithoutOrganizationInput.schema';
import { ProjectUncheckedCreateWithoutOrganizationInputObjectSchema as ProjectUncheckedCreateWithoutOrganizationInputObjectSchema } from './ProjectUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutOrganizationInput>;
export const ProjectCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
