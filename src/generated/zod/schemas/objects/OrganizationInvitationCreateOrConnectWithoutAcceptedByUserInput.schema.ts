import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInput>;
export const OrganizationInvitationCreateOrConnectWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
