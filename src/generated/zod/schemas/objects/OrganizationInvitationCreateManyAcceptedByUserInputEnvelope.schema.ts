import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationInvitationCreateManyAcceptedByUserInputObjectSchema as OrganizationInvitationCreateManyAcceptedByUserInputObjectSchema } from './OrganizationInvitationCreateManyAcceptedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrganizationInvitationCreateManyAcceptedByUserInputObjectSchema), z.lazy(() => OrganizationInvitationCreateManyAcceptedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.OrganizationInvitationCreateManyAcceptedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationInvitationCreateManyAcceptedByUserInputEnvelope>;
export const OrganizationInvitationCreateManyAcceptedByUserInputEnvelopeObjectZodSchema = makeSchema();
