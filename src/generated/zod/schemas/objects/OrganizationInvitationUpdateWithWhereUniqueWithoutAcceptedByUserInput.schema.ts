import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUpdateWithoutAcceptedByUserInput.schema';
import { OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationInvitationUpdateWithoutAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedUpdateWithoutAcceptedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInput>;
export const OrganizationInvitationUpdateWithWhereUniqueWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
