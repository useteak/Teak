import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationScalarWhereInputObjectSchema as OrganizationInvitationScalarWhereInputObjectSchema } from './OrganizationInvitationScalarWhereInput.schema';
import { OrganizationInvitationUpdateManyMutationInputObjectSchema as OrganizationInvitationUpdateManyMutationInputObjectSchema } from './OrganizationInvitationUpdateManyMutationInput.schema';
import { OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationInvitationUpdateManyMutationInputObjectSchema), z.lazy(() => OrganizationInvitationUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInput>;
export const OrganizationInvitationUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
