import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  token: z.string().optional()
}).strict();
export const OrganizationInvitationWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrganizationInvitationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationWhereUniqueInput>;
export const OrganizationInvitationWhereUniqueInputObjectZodSchema = makeSchema();
