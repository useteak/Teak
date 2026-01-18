import * as z from 'zod';

export const FeedbackScalarFieldEnumSchema = z.enum(['id', 'description', 'type', 'email', 'metadata', 'projectId', 'createdAt', 'updatedAt'])

export type FeedbackScalarFieldEnum = z.infer<typeof FeedbackScalarFieldEnumSchema>;