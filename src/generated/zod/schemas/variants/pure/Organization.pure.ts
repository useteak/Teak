import * as z from 'zod';
// prettier-ignore
export const OrganizationModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    users: z.array(z.unknown()),
    projects: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrganizationPureType = z.infer<typeof OrganizationModelSchema>;
