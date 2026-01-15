import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationWhereInputObjectSchema as OrganizationInvitationWhereInputObjectSchema } from './OrganizationInvitationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationInvitationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountOrganizationInvitationsCreatedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountOrganizationInvitationsCreatedArgsObjectZodSchema = makeSchema();
