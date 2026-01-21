import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional()
}).strict();
export const ApiKeyIncludeObjectSchema: z.ZodType<Prisma.ApiKeyInclude> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyInclude>;
export const ApiKeyIncludeObjectZodSchema = makeSchema();
