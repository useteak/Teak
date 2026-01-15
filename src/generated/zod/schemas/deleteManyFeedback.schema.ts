import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './objects/FeedbackWhereInput.schema';

export const FeedbackDeleteManySchema: z.ZodType<Prisma.FeedbackDeleteManyArgs> = z.object({ where: FeedbackWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackDeleteManyArgs>;

export const FeedbackDeleteManyZodSchema = z.object({ where: FeedbackWhereInputObjectSchema.optional() }).strict();