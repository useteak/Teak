import * as z from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id', 'label', 'organizationId', 'createdAt', 'updatedAt'])

export type ApiKeyScalarFieldEnum = z.infer<typeof ApiKeyScalarFieldEnumSchema>;