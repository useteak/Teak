import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutProjectsInputObjectSchema as OrganizationCreateWithoutProjectsInputObjectSchema } from './OrganizationCreateWithoutProjectsInput.schema';
import { OrganizationUncheckedCreateWithoutProjectsInputObjectSchema as OrganizationUncheckedCreateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedCreateWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProjectsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutProjectsInput>;
export const OrganizationCreateOrConnectWithoutProjectsInputObjectZodSchema = makeSchema();
