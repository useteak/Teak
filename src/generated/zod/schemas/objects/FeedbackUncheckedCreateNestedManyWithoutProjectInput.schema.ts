import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackCreateWithoutProjectInputObjectSchema as FeedbackCreateWithoutProjectInputObjectSchema } from './FeedbackCreateWithoutProjectInput.schema';
import { FeedbackUncheckedCreateWithoutProjectInputObjectSchema as FeedbackUncheckedCreateWithoutProjectInputObjectSchema } from './FeedbackUncheckedCreateWithoutProjectInput.schema';
import { FeedbackCreateOrConnectWithoutProjectInputObjectSchema as FeedbackCreateOrConnectWithoutProjectInputObjectSchema } from './FeedbackCreateOrConnectWithoutProjectInput.schema';
import { FeedbackCreateManyProjectInputEnvelopeObjectSchema as FeedbackCreateManyProjectInputEnvelopeObjectSchema } from './FeedbackCreateManyProjectInputEnvelope.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './FeedbackWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FeedbackCreateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => FeedbackUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FeedbackCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => FeedbackCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FeedbackCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FeedbackWhereUniqueInputObjectSchema), z.lazy(() => FeedbackWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.FeedbackUncheckedCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUncheckedCreateNestedManyWithoutProjectInput>;
export const FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
