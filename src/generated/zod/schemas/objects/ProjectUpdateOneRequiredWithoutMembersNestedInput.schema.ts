import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProjectCreateWithoutMembersInputObjectSchema as ProjectCreateWithoutMembersInputObjectSchema } from './ProjectCreateWithoutMembersInput.schema';
import { ProjectUncheckedCreateWithoutMembersInputObjectSchema as ProjectUncheckedCreateWithoutMembersInputObjectSchema } from './ProjectUncheckedCreateWithoutMembersInput.schema';
import { ProjectCreateOrConnectWithoutMembersInputObjectSchema as ProjectCreateOrConnectWithoutMembersInputObjectSchema } from './ProjectCreateOrConnectWithoutMembersInput.schema';
import { ProjectUpsertWithoutMembersInputObjectSchema as ProjectUpsertWithoutMembersInputObjectSchema } from './ProjectUpsertWithoutMembersInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutMembersInputObjectSchema as ProjectUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutMembersInput.schema';
import { ProjectUpdateWithoutMembersInputObjectSchema as ProjectUpdateWithoutMembersInputObjectSchema } from './ProjectUpdateWithoutMembersInput.schema';
import { ProjectUncheckedUpdateWithoutMembersInputObjectSchema as ProjectUncheckedUpdateWithoutMembersInputObjectSchema } from './ProjectUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => ProjectUpdateWithoutMembersInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput>;
export const ProjectUpdateOneRequiredWithoutMembersNestedInputObjectZodSchema = makeSchema();
