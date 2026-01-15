import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationCreateManyCreatedByUserInputObjectSchema as OrganizationInvitationCreateManyCreatedByUserInputObjectSchema } from './OrganizationInvitationCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrganizationInvitationCreateManyCreatedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateManyCreatedByUserInputEnvelope>;
export const OrganizationInvitationCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
