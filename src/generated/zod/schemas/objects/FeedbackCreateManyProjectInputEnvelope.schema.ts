import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackCreateManyProjectInputObjectSchema as FeedbackCreateManyProjectInputObjectSchema } from './FeedbackCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FeedbackCreateManyProjectInputObjectSchema), z.lazy(() => FeedbackCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FeedbackCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.FeedbackCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCreateManyProjectInputEnvelope>;
export const FeedbackCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
