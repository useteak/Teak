import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackCreateManyInputObjectSchema as FeedbackCreateManyInputObjectSchema } from './objects/FeedbackCreateManyInput.schema';

export const FeedbackCreateManySchema: z.ZodType<Prisma.FeedbackCreateManyArgs> = z.object({ data: z.union([ FeedbackCreateManyInputObjectSchema, z.array(FeedbackCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackCreateManyArgs>;

export const FeedbackCreateManyZodSchema = z.object({ data: z.union([ FeedbackCreateManyInputObjectSchema, z.array(FeedbackCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();