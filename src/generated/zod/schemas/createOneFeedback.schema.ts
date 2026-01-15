import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './objects/FeedbackSelect.schema';
import { FeedbackIncludeObjectSchema as FeedbackIncludeObjectSchema } from './objects/FeedbackInclude.schema';
import { FeedbackCreateInputObjectSchema as FeedbackCreateInputObjectSchema } from './objects/FeedbackCreateInput.schema';
import { FeedbackUncheckedCreateInputObjectSchema as FeedbackUncheckedCreateInputObjectSchema } from './objects/FeedbackUncheckedCreateInput.schema';

export const FeedbackCreateOneSchema: z.ZodType<Prisma.FeedbackCreateArgs> = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), data: z.union([FeedbackCreateInputObjectSchema, FeedbackUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FeedbackCreateArgs>;

export const FeedbackCreateOneZodSchema = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), data: z.union([FeedbackCreateInputObjectSchema, FeedbackUncheckedCreateInputObjectSchema]) }).strict();