import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationScalarWhereInputObjectSchema as OrganizationInvitationScalarWhereInputObjectSchema } from './OrganizationInvitationScalarWhereInput.schema';
import { OrganizationInvitationUpdateManyMutationInputObjectSchema as OrganizationInvitationUpdateManyMutationInputObjectSchema } from './OrganizationInvitationUpdateManyMutationInput.schema';
import { OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserInputObjectSchema as OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserInputObjectSchema } from './OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationInvitationUpdateManyMutationInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedUpdateManyWithoutAcceptedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInput>;
export const OrganizationInvitationUpdateManyWithWhereWithoutAcceptedByUserInputObjectZodSchema = makeSchema();
