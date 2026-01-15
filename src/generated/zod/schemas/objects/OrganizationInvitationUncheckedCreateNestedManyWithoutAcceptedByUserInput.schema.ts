import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema as OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema } from './OrganizationInvitationCreateManyAcceptedByUserInputEnvelope.schema';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema).array(), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInput>;
export const OrganizationInvitationUncheckedCreateNestedManyWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
