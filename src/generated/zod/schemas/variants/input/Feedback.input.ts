import * as z from 'zod';
import { FeedbackTypeSchema } from '../../enums/FeedbackType.schema';
// prettier-ignore
export const FeedbackInputSchema = z.object({
    id: z.string(),
    description: z.string(),
    type: FeedbackTypeSchema,
    email: z.string().optional().nullable(),
    projectId: z.string(),
    project: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FeedbackInputType = z.infer<typeof FeedbackInputSchema>;
