import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { ProjectFindManySchema as ProjectFindManySchema } from '../findManyProject.schema';
import { OrganizationInvitationFindManySchema as OrganizationInvitationFindManySchema } from '../findManyOrganizationInvitation.schema';
import { OrganizationCountOutputTypeArgsObjectSchema as OrganizationCountOutputTypeArgsObjectSchema } from './OrganizationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  projects: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => OrganizationInvitationFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrganizationSelectObjectSchema: z.ZodType<Prisma.OrganizationSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationSelect>;
export const OrganizationSelectObjectZodSchema = makeSchema();
