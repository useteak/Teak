import * as z from 'zod';
export const FeedbackFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  description: z.string(),
  type: z.unknown(),
  email: z.string().optional(),
  projectId: z.string(),
  project: z.unknown(),
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