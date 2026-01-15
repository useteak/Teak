import * as z from 'zod';
export const FeedbackUpsertResultSchema = z.object({
  id: z.string(),
  description: z.string(),
  type: z.unknown(),
  email: z.string().optional(),
  projectId: z.string(),
  project: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});