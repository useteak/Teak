import * as z from 'zod';
export const ApiKeyUpsertResultSchema = z.object({
  id: z.string(),
  label: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});