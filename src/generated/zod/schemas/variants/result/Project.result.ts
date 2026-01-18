import * as z from 'zod';
// prettier-ignore
export const ProjectResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    rateLimitingEnabled: z.boolean(),
    organizationId: z.string(),
    organization: z.unknown(),
    feedbacks: z.array(z.unknown()),
    members: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProjectResultType = z.infer<typeof ProjectResultSchema>;
