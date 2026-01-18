import * as z from 'zod';
// prettier-ignore
export const ProjectMemberInputSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    project: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    notifyOnFeedback: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProjectMemberInputType = z.infer<typeof ProjectMemberInputSchema>;
