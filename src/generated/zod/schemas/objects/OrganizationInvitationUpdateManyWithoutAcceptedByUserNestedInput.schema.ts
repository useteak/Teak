import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema as OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema } from './OrganizationInvitationCreateManyAcceptedByUserInputEnvelope.schema';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationScalarWhereInputObjectSchema as OrganizationInvitationScalarWhereInputObjectSchema } from './OrganizationInvitationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema).array(), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema), z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationInvitationUpdateManyWithoutAcceptedByUserNestedInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateManyWithoutAcceptedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateManyWithoutAcceptedByUserNestedInput>;
export const OrganizationInvitationUpdateManyWithoutAcceptedByUserNestedInputObjectZodSchema = makeSchema();
