import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './objects/FeedbackSelect.schema';
import { FeedbackUpdateManyMutationInputObjectSchema as FeedbackUpdateManyMutationInputObjectSchema } from './objects/FeedbackUpdateManyMutationInput.schema';
import { FeedbackWhereInputObjectSchema as FeedbackWhereInputObjectSchema } from './objects/FeedbackWhereInput.schema';

export const FeedbackUpdateManyAndReturnSchema: z.ZodType<Prisma.FeedbackUpdateManyAndReturnArgs> = z.object({ select: FeedbackSelectObjectSchema.optional(), data: FeedbackUpdateManyMutationInputObjectSchema, where: FeedbackWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedbackUpdateManyAndReturnArgs>;

export const FeedbackUpdateManyAndReturnZodSchema = z.object({ select: FeedbackSelectObjectSchema.optional(), data: FeedbackUpdateManyMutationInputObjectSchema, where: FeedbackWhereInputObjectSchema.optional() }).strict();