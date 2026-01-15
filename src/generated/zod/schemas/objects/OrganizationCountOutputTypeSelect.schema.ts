import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCountOutputTypeCountUsersArgsObjectSchema as OrganizationCountOutputTypeCountUsersArgsObjectSchema } from './OrganizationCountOutputTypeCountUsersArgs.schema';
import { OrganizationCountOutputTypeCountProjectsArgsObjectSchema as OrganizationCountOutputTypeCountProjectsArgsObjectSchema } from './OrganizationCountOutputTypeCountProjectsArgs.schema';
import { OrganizationCountOutputTypeCountInvitationsArgsObjectSchema as OrganizationCountOutputTypeCountInvitationsArgsObjectSchema } from './OrganizationCountOutputTypeCountInvitationsArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountUsersArgsObjectSchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountProjectsArgsObjectSchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountInvitationsArgsObjectSchema)]).optional()
}).strict();
export const OrganizationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCountOutputTypeSelect>;
export const OrganizationCountOutputTypeSelectObjectZodSchema = makeSchema();
