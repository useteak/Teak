import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './FeedbackWhereUniqueInput.schema';
import { FeedbackUpdateWithoutProjectInputObjectSchema as FeedbackUpdateWithoutProjectInputObjectSchema } from './FeedbackUpdateWithoutProjectInput.schema';
import { FeedbackUncheckedUpdateWithoutProjectInputObjectSchema as FeedbackUncheckedUpdateWithoutProjectInputObjectSchema } from './FeedbackUncheckedUpdateWithoutProjectInput.schema';
import { FeedbackCreateWithoutProjectInputObjectSchema as FeedbackCreateWithoutProjectInputObjectSchema } from './FeedbackCreateWithoutProjectInput.schema';
import { FeedbackUncheckedCreateWithoutProjectInputObjectSchema as FeedbackUncheckedCreateWithoutProjectInputObjectSchema } from './FeedbackUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedbackWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FeedbackUpdateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => FeedbackCreateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const FeedbackUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.FeedbackUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUpsertWithWhereUniqueWithoutProjectInput>;
export const FeedbackUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
