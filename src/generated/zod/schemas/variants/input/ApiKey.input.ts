import * as z from 'zod';
// prettier-ignore
export const ApiKeyInputSchema = z.object({
    id: z.string(),
    label: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ApiKeyInputType = z.infer<typeof ApiKeyInputSchema>;
