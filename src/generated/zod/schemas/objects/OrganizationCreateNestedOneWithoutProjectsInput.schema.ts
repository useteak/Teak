import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutProjectsInputObjectSchema as OrganizationCreateWithoutProjectsInputObjectSchema } from './OrganizationCreateWithoutProjectsInput.schema';
import { OrganizationUncheckedCreateWithoutProjectsInputObjectSchema as OrganizationUncheckedCreateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedCreateWithoutProjectsInput.schema';
import { OrganizationCreateOrConnectWithoutProjectsInputObjectSchema as OrganizationCreateOrConnectWithoutProjectsInputObjectSchema } from './OrganizationCreateOrConnectWithoutProjectsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProjectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutProjectsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutProjectsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutProjectsInput>;
export const OrganizationCreateNestedOneWithoutProjectsInputObjectZodSchema = makeSchema();
