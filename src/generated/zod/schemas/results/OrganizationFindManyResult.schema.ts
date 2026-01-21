import * as z from 'zod';
export const OrganizationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  users: z.array(z.unknown()),
  projects: z.array(z.unknown()),
  invitations: z.array(z.unknown()),
  apiKeys: z.array(z.unknown()),
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