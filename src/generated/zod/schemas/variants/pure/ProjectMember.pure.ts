import * as z from 'zod';
// prettier-ignore
export const ProjectMemberModelSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    project: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    notifyOnFeedback: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProjectMemberPureType = z.infer<typeof ProjectMemberModelSchema>;
