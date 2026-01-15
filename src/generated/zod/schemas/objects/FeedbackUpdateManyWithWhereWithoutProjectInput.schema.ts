import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackScalarWhereInputObjectSchema as FeedbackScalarWhereInputObjectSchema } from './FeedbackScalarWhereInput.schema';
import { FeedbackUpdateManyMutationInputObjectSchema as FeedbackUpdateManyMutationInputObjectSchema } from './FeedbackUpdateManyMutationInput.schema';
import { FeedbackUncheckedUpdateManyWithoutProjectInputObjectSchema as FeedbackUncheckedUpdateManyWithoutProjectInputObjectSchema } from './FeedbackUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedbackScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FeedbackUpdateManyMutationInputObjectSchema), z.lazy(() => FeedbackUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const FeedbackUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.FeedbackUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUpdateManyWithWhereWithoutProjectInput>;
export const FeedbackUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
