import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'title', 'rateLimitingEnabled', 'organizationId', 'createdAt', 'updatedAt'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;