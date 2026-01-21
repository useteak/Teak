import * as z from 'zod';
export const ApiKeyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  label: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
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