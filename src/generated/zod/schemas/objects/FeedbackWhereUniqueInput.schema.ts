import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const FeedbackWhereUniqueInputObjectSchema: z.ZodType<Prisma.FeedbackWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackWhereUniqueInput>;
export const FeedbackWhereUniqueInputObjectZodSchema = makeSchema();
