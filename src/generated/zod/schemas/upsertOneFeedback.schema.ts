import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './objects/FeedbackSelect.schema';
import { FeedbackIncludeObjectSchema as FeedbackIncludeObjectSchema } from './objects/FeedbackInclude.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './objects/FeedbackWhereUniqueInput.schema';
import { FeedbackCreateInputObjectSchema as FeedbackCreateInputObjectSchema } from './objects/FeedbackCreateInput.schema';
import { FeedbackUncheckedCreateInputObjectSchema as FeedbackUncheckedCreateInputObjectSchema } from './objects/FeedbackUncheckedCreateInput.schema';
import { FeedbackUpdateInputObjectSchema as FeedbackUpdateInputObjectSchema } from './objects/FeedbackUpdateInput.schema';
import { FeedbackUncheckedUpdateInputObjectSchema as FeedbackUncheckedUpdateInputObjectSchema } from './objects/FeedbackUncheckedUpdateInput.schema';

export const FeedbackUpsertOneSchema: z.ZodType<Prisma.FeedbackUpsertArgs> = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), where: FeedbackWhereUniqueInputObjectSchema, create: z.union([ FeedbackCreateInputObjectSchema, FeedbackUncheckedCreateInputObjectSchema ]), update: z.union([ FeedbackUpdateInputObjectSchema, FeedbackUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FeedbackUpsertArgs>;

export const FeedbackUpsertOneZodSchema = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), where: FeedbackWhereUniqueInputObjectSchema, create: z.union([ FeedbackCreateInputObjectSchema, FeedbackUncheckedCreateInputObjectSchema ]), update: z.union([ FeedbackUpdateInputObjectSchema, FeedbackUncheckedUpdateInputObjectSchema ]) }).strict();