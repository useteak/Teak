import * as z from 'zod';

export const OrganizationScalarFieldEnumSchema = z.enum(['id', 'name', 'image', 'createdAt', 'updatedAt'])

export type OrganizationScalarFieldEnum = z.infer<typeof OrganizationScalarFieldEnumSchema>;