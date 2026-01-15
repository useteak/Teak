import * as z from 'zod';
export const ProjectGroupByResultSchema = z.array(z.object({
  id: z.string(),
  title: z.string(),
  organizationId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    organizationId: z.number(),
    organization: z.number(),
    feedbacks: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    organizationId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    organizationId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));