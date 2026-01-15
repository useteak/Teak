import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereUniqueInputObjectSchema as OrganizationInvitationWhereUniqueInputObjectSchema } from './OrganizationInvitationWhereUniqueInput.schema';
import { OrganizationInvitationUpdateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUpdateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUpdateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateWithoutCreatedByUserInput.schema';
import { OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrganizationInvitationUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationInvitationCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const OrganizationInvitationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
