import * as z from 'zod';
export const ProjectUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  feedbacks: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));