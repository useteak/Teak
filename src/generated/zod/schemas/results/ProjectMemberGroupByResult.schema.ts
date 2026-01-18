import * as z from 'zod';
export const ProjectMemberGroupByResultSchema = z.array(z.object({
  id: z.string(),
  projectId: z.string(),
  userId: z.string(),
  notifyOnFeedback: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    projectId: z.number(),
    project: z.number(),
    userId: z.number(),
    user: z.number(),
    notifyOnFeedback: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    projectId: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    projectId: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));