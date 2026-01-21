import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyOrderByWithRelationInputObjectSchema as ApiKeyOrderByWithRelationInputObjectSchema } from './objects/ApiKeyOrderByWithRelationInput.schema';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyScalarFieldEnumSchema } from './enums/ApiKeyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ApiKeyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ApiKeySelect> = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ApiKeySelect>;

export const ApiKeyFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ApiKeyFindFirstOrThrowSchema: z.ZodType<Prisma.ApiKeyFindFirstOrThrowArgs> = z.object({ select: ApiKeyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ApiKeyIncludeObjectSchema.optional()), orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ApiKeyScalarFieldEnumSchema, ApiKeyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyFindFirstOrThrowArgs>;

export const ApiKeyFindFirstOrThrowZodSchema = z.object({ select: ApiKeyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ApiKeyIncludeObjectSchema.optional()), orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ApiKeyScalarFieldEnumSchema, ApiKeyScalarFieldEnumSchema.array()]).optional() }).strict();