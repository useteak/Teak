import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutProjectsInputObjectSchema as OrganizationUpdateWithoutProjectsInputObjectSchema } from './OrganizationUpdateWithoutProjectsInput.schema';
import { OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema as OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutProjectsInput.schema';
import { OrganizationCreateWithoutProjectsInputObjectSchema as OrganizationCreateWithoutProjectsInputObjectSchema } from './OrganizationCreateWithoutProjectsInput.schema';
import { OrganizationUncheckedCreateWithoutProjectsInputObjectSchema as OrganizationUncheckedCreateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedCreateWithoutProjectsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProjectsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutProjectsInput>;
export const OrganizationUpsertWithoutProjectsInputObjectZodSchema = makeSchema();
