import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountOrganizationsArgsObjectSchema as UserCountOutputTypeCountOrganizationsArgsObjectSchema } from './UserCountOutputTypeCountOrganizationsArgs.schema';
import { UserCountOutputTypeCountOrganizationInvitationsCreatedArgsObjectSchema as UserCountOutputTypeCountOrganizationInvitationsCreatedArgsObjectSchema } from './UserCountOutputTypeCountOrganizationInvitationsCreatedArgs.schema';
import { UserCountOutputTypeCountOrganizationInvitationsAcceptedArgsObjectSchema as UserCountOutputTypeCountOrganizationInvitationsAcceptedArgsObjectSchema } from './UserCountOutputTypeCountOrganizationInvitationsAcceptedArgs.schema';
import { UserCountOutputTypeCountProjectMembershipsArgsObjectSchema as UserCountOutputTypeCountProjectMembershipsArgsObjectSchema } from './UserCountOutputTypeCountProjectMembershipsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  organizations: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrganizationsArgsObjectSchema)]).optional(),
  organizationInvitationsCreated: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrganizationInvitationsCreatedArgsObjectSchema)]).optional(),
  organizationInvitationsAccepted: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrganizationInvitationsAcceptedArgsObjectSchema)]).optional(),
  projectMemberships: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountProjectMembershipsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
