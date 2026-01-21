import * as z from 'zod';
export const ApiKeyAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    label: z.number(),
    organizationId: z.number(),
    organization: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    label: z.string().nullable(),
    organizationId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    label: z.string().nullable(),
    organizationId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});