import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  organizations: z.array(z.unknown()),
  organizationInvitationsCreated: z.array(z.unknown()),
  organizationInvitationsAccepted: z.array(z.unknown())
});