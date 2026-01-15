import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './objects/FeedbackSelect.schema';
import { FeedbackCreateManyInputObjectSchema as FeedbackCreateManyInputObjectSchema } from './objects/FeedbackCreateManyInput.schema';

export const FeedbackCreateManyAndReturnSchema: z.ZodType<Prisma.FeedbackCreateManyAndReturnArgs> = z.object({ select: FeedbackSelectObjectSchema.optional(), data: z.union([ FeedbackCreateManyInputObjectSchema, z.array(FeedbackCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackCreateManyAndReturnArgs>;

export const FeedbackCreateManyAndReturnZodSchema = z.object({ select: FeedbackSelectObjectSchema.optional(), data: z.union([ FeedbackCreateManyInputObjectSchema, z.array(FeedbackCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();