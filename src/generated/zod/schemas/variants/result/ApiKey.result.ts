import * as z from 'zod';
// prettier-ignore
export const ApiKeyResultSchema = z.object({
    id: z.string(),
    label: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ApiKeyResultType = z.infer<typeof ApiKeyResultSchema>;
