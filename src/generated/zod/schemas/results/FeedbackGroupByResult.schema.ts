import * as z from 'zod';
export const FeedbackGroupByResultSchema = z.array(z.object({
  id: z.string(),
  description: z.string(),
  email: z.string(),
  projectId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    description: z.number(),
    type: z.number(),
    email: z.number(),
    projectId: z.number(),
    project: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    email: z.string().nullable(),
    projectId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    email: z.string().nullable(),
    projectId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));