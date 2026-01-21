import * as z from 'zod';
// prettier-ignore
export const OrganizationInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().optional().nullable(),
    users: z.array(z.unknown()),
    projects: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    apiKeys: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrganizationInputType = z.infer<typeof OrganizationInputSchema>;
