import * as z from 'zod';
export const ProjectFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  title: z.string(),
  rateLimitingEnabled: z.boolean(),
  organizationId: z.string(),
  organization: z.unknown(),
  feedbacks: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});