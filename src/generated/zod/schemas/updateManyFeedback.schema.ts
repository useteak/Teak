import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackUpdateManyMutationInputObjectSchema as FeedbackUpdateManyMutationInputObjectSchema } from './objects/FeedbackUpdateManyMutationInput.schema';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './objects/FeedbackWhereInput.schema';

export const FeedbackUpdateManySchema: z.ZodType<Prisma.FeedbackUpdateManyArgs> = z.object({ data: FeedbackUpdateManyMutationInputObjectSchema, where: FeedbackWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackUpdateManyArgs>;

export const FeedbackUpdateManyZodSchema = z.object({ data: FeedbackUpdateManyMutationInputObjectSchema, where: FeedbackWhereInputObjectSchema.optional() }).strict();