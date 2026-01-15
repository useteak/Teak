import * as z from 'zod';
import { FeedbackTypeSchema } from '../../enums/FeedbackType.schema';
// prettier-ignore
export const FeedbackModelSchema = z.object({
    id: z.string(),
    description: z.string(),
    type: FeedbackTypeSchema,
    email: z.string().nullable(),
    projectId: z.string(),
    project: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FeedbackPureType = z.infer<typeof FeedbackModelSchema>;
