import * as z from 'zod';
export const ProjectAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    rateLimitingEnabled: z.number(),
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
  }).nullable().optional()});