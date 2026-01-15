import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutProjectsInputObjectSchema as OrganizationCreateWithoutProjectsInputObjectSchema } from './OrganizationCreateWithoutProjectsInput.schema';
import { OrganizationUncheckedCreateWithoutProjectsInputObjectSchema as OrganizationUncheckedCreateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedCreateWithoutProjectsInput.schema';
import { OrganizationCreateOrConnectWithoutProjectsInputObjectSchema as OrganizationCreateOrConnectWithoutProjectsInputObjectSchema } from './OrganizationCreateOrConnectWithoutProjectsInput.schema';
import { OrganizationUpsertWithoutProjectsInputObjectSchema as OrganizationUpsertWithoutProjectsInputObjectSchema } from './OrganizationUpsertWithoutProjectsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutProjectsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutProjectsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutProjectsInput.schema';
import { OrganizationUpdateWithoutProjectsInputObjectSchema as OrganizationUpdateWithoutProjectsInputObjectSchema } from './OrganizationUpdateWithoutProjectsInput.schema';
import { OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema as OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutProjectsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProjectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutProjectsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutProjectsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutProjectsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutProjectsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutProjectsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutProjectsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutProjectsNestedInput>;
export const OrganizationUpdateOneRequiredWithoutProjectsNestedInputObjectZodSchema = makeSchema();
