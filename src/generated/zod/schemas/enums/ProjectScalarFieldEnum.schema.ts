import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'title', 'organizationId', 'createdAt', 'updatedAt'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;