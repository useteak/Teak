import * as z from 'zod';
export const ProjectFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  rateLimitingEnabled: z.boolean(),
  organizationId: z.string(),
  organization: z.unknown(),
  feedbacks: z.array(z.unknown()),
  members: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));