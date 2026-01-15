import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  acceptedByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const OrganizationInvitationIncludeObjectSchema: z.ZodType<Prisma.OrganizationInvitationInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationInclude>;
export const OrganizationInvitationIncludeObjectZodSchema = makeSchema();
