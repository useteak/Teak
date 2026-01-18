import * as z from 'zod';

export const ProjectMemberScalarFieldEnumSchema = z.enum(['id', 'projectId', 'userId', 'notifyOnFeedback', 'createdAt', 'updatedAt'])

export type ProjectMemberScalarFieldEnum = z.infer<typeof ProjectMemberScalarFieldEnumSchema>;