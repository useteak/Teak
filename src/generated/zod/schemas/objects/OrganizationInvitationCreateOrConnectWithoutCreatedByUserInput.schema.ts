import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateOrConnectWithoutCreatedByUserInput>;
export const OrganizationInvitationCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
