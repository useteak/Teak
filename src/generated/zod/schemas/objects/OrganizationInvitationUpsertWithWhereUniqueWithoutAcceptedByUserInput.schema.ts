import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUpdateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutAcceptedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInput>;
export const OrganizationInvitationUpsertWithWhereUniqueWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
