import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationUpdateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUpdateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUpdateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationInvitationUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const OrganizationInvitationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
