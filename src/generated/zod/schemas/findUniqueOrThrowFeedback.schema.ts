import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FeedbackSelectObjectSchema as FeedbackSelectObjectSchema } from './objects/FeedbackSelect.schema';
import { FeedbackIncludeObjectSchema as FeedbackIncludeObjectSchema } from './objects/FeedbackInclude.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './objects/FeedbackWhereUniqueInput.schema';

export const FeedbackFindUniqueOrThrowSchema: z.ZodType<Prisma.FeedbackFindUniqueOrThrowArgs> = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), where: FeedbackWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FeedbackFindUniqueOrThrowArgs>;

export const FeedbackFindUniqueOrThrowZodSchema = z.object({ select: FeedbackSelectObjectSchema.optional(), include: FeedbackIncludeObjectSchema.optional(), where: FeedbackWhereUniqueInputObjectSchema }).strict();