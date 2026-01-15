import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateOrConnectWithoutCreatedByUserInput.schema';
import { OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema as OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema } from './OrganizationInvitationCreateManyCreatedByUserInputEnvelope.schema';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateNestedManyWithoutCreatedByUserInput>;
export const OrganizationInvitationCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
