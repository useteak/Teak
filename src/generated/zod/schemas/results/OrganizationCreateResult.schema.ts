import * as z from 'zod';
export const OrganizationCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  users: z.array(z.unknown()),
  projects: z.array(z.unknown()),
  invitations: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});