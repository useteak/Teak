import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackCreateWithoutProjectInputObjectSchema as FeedbackCreateWithoutProjectInputObjectSchema } from './FeedbackCreateWithoutProjectInput.schema';
import { FeedbackUncheckedCreateWithoutProjectInputObjectSchema as FeedbackUncheckedCreateWithoutProjectInputObjectSchema } from './FeedbackUncheckedCreateWithoutProjectInput.schema';
import { FeedbackCreateOrConnectWithoutProjectInputObjectSchema as FeedbackCreateOrConnectWithoutProjectInputObjectSchema } from './FeedbackCreateOrConnectWithoutProjectInput.schema';
import { FeedbackUpsertWithWhereUniqueWithoutProjectInputObjectSchema as FeedbackUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './FeedbackUpsertWithWhereUniqueWithoutProjectInput.schema';
import { FeedbackCreateManyProjectInputEnvelopeObjectSchema as FeedbackCreateManyProjectInputEnvelopeObjectSchema } from './FeedbackCreateManyProjectInputEnvelope.schema';
import { FeedbackWhereUniqueInputObjectSchema as FeedbackWhereUniqueInputObjectSchema } from './FeedbackWhereUniqueInput.schema';
import { FeedbackUpdateWithWhereUniqueWithoutProjectInputObjectSchema as FeedbackUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './FeedbackUpdateWithWhereUniqueWithoutProjectInput.schema';
import { FeedbackUpdateManyWithWhereWithoutProjectInputObjectSchema as FeedbackUpdateManyWithWhereWithoutProjectInputObjectSchema } from './FeedbackUpdateManyWithWhereWithoutProjectInput.schema';
import { FeedbackScalarWhereInputObjectSchema as FeedbackScalarWhereInputObjectSchema } from './FeedbackScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FeedbackCreateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => FeedbackUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FeedbackCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => FeedbackCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FeedbackUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FeedbackCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FeedbackWhereUniqueInputObjectSchema), z.lazy(() => FeedbackWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FeedbackWhereUniqueInputObjectSchema), z.lazy(() => FeedbackWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FeedbackWhereUniqueInputObjectSchema), z.lazy(() => FeedbackWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FeedbackWhereUniqueInputObjectSchema), z.lazy(() => FeedbackWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FeedbackUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FeedbackUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => FeedbackUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FeedbackScalarWhereInputObjectSchema), z.lazy(() => FeedbackScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FeedbackUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.FeedbackUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedbackUpdateManyWithoutProjectNestedInput>;
export const FeedbackUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
