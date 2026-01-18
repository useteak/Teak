import * as z from 'zod';
export const FeedbackFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  description: z.string(),
  type: z.unknown(),
  email: z.string().optional(),
  metadata: z.unknown().optional(),
  projectId: z.string(),
  project: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));