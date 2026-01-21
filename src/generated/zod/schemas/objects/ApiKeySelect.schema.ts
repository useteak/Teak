import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ApiKeySelectObjectSchema: z.ZodType<Prisma.ApiKeySelect> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeySelect>;
export const ApiKeySelectObjectZodSchema = makeSchema();
