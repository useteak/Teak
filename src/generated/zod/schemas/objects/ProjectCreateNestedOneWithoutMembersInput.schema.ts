import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateWithoutMembersInputObjectSchema as ProjectCreateWithoutMembersInputObjectSchema } from './ProjectCreateWithoutMembersInput.schema';
import { ProjectUncheckedCreateWithoutMembersInputObjectSchema as ProjectUncheckedCreateWithoutMembersInputObjectSchema } from './ProjectUncheckedCreateWithoutMembersInput.schema';
import { ProjectCreateOrConnectWithoutMembersInputObjectSchema as ProjectCreateOrConnectWithoutMembersInputObjectSchema } from './ProjectCreateOrConnectWithoutMembersInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutMembersInput>;
export const ProjectCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();
