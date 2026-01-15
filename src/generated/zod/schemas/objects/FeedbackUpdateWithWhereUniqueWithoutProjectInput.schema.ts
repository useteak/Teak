import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './FeedbackWhereUniqueInput.schema';
import { FeedbackUpdateWithoutProjectInputObjectSchema as FeedbackUpdateWithoutProjectInputObjectSchema } from './FeedbackUpdateWithoutProjectInput.schema';
import { FeedbackUncheckedUpdateWithoutProjectInputObjectSchema as FeedbackUncheckedUpdateWithoutProjectInputObjectSchema } from './FeedbackUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedbackWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FeedbackUpdateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const FeedbackUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.FeedbackUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUpdateWithWhereUniqueWithoutProjectInput>;
export const FeedbackUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
