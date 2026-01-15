import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './FeedbackWhereUniqueInput.schema';
import { FeedbackCreateWithoutProjectInputObjectSchema as FeedbackCreateWithoutProjectInputObjectSchema } from './FeedbackCreateWithoutProjectInput.schema';
import { FeedbackUncheckedCreateWithoutProjectInputObjectSchema as FeedbackUncheckedCreateWithoutProjectInputObjectSchema } from './FeedbackUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedbackWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FeedbackCreateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const FeedbackCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.FeedbackCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackCreateOrConnectWithoutProjectInput>;
export const FeedbackCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
