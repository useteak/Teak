import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutApiKeysInputObjectSchema as OrganizationCreateNestedOneWithoutApiKeysInputObjectSchema } from './OrganizationCreateNestedOneWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutApiKeysInputObjectSchema)
}).strict();
export const ApiKeyCreateInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateInput>;
export const ApiKeyCreateInputObjectZodSchema = makeSchema();
