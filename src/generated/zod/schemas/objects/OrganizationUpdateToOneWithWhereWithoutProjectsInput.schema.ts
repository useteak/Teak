import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutProjectsInputObjectSchema as OrganizationUpdateWithoutProjectsInputObjectSchema } from './OrganizationUpdateWithoutProjectsInput.schema';
import { OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema as OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutProjectsInput>;
export const OrganizationUpdateToOneWithWhereWithoutProjectsInputObjectZodSchema = makeSchema();
