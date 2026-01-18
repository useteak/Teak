import * as z from 'zod';
export const ProjectMemberUpsertResultSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  project: z.unknown(),
  userId: z.string(),
  user: z.unknown(),
  notifyOnFeedback: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
});