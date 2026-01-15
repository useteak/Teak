import * as z from 'zod';

export const FeedbackTypeSchema = z.enum(['BUG', 'FEATURE_REQUEST', 'IMPROVEMENT', 'QUESTION', 'PRAISE', 'OTHER'])

export type FeedbackType = z.infer<typeof FeedbackTypeSchema>;