import * as z from 'zod';
export const OrganizationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  users: z.array(z.unknown()),
  projects: z.array(z.unknown()),
  invitations: z.array(z.unknown()),
  apiKeys: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));