import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateOrConnectWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema as OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema } from './OrganizationInvitationCreateManyCreatedByUserInputEnvelope.schema';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { OrganizationInvitationScalarWhereInputObjectSchema as OrganizationInvitationScalarWhereInputObjectSchema } from './OrganizationInvitationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema), z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInput>;
export const OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
