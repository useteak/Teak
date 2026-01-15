import * as z from 'zod';

export const OrganizationScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt'])

export type OrganizationScalarFieldEnum = z.infer<typeof OrganizationScalarFieldEnumSchema>;