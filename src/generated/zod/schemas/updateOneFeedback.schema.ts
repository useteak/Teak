import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './objects/FeedbackSelect.schema';
import { FeedbackIncludeObjectSchema as FeedbackIncludeObjectSchema } from './objects/FeedbackInclude.schema';
import { FeedbackUpdateInputObjectSchema as FeedbackUpdateInputObjectSchema } from './objects/FeedbackUpdateInput.schema';
import { FeedbackUncheckedUpdateInputObjectSchema as FeedbackUncheckedUpdateInputObjectSchema } from './objects/FeedbackUncheckedUpdateInput.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './objects/FeedbackWhereUniqueInput.schema';

export const FeedbackUpdateOneSchema: z.ZodType<Prisma.FeedbackUpdateArgs> = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), data: z.union([FeedbackUpdateInputObjectSchema, FeedbackUncheckedUpdateInputObjectSchema]), where: FeedbackWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FeedbackUpdateArgs>;

export const FeedbackUpdateOneZodSchema = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), data: z.union([FeedbackUpdateInputObjectSchema, FeedbackUncheckedUpdateInputObjectSchema]), where: FeedbackWhereUniqueInputObjectSchema }).strict();