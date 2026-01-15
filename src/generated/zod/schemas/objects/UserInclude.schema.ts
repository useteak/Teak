import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { OrganizationFindManySchema as OrganizationFindManySchema } from '../findManyOrganization.schema';
import { OrganizationInvitationFindManySchema as OrganizationInvitationFindManySchema } from '../findManyOrganizationInvitation.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  organizations: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
  organizationInvitationsCreated: z.union([z.boolean(), z.lazy(() => OrganizationInvitationFindManySchema)]).optional(),
  organizationInvitationsAccepted: z.union([z.boolean(), z.lazy(() => OrganizationInvitationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
