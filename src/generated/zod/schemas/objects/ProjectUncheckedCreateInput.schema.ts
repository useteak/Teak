import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema as FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './FeedbackUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  rateLimitingEnabled: z.boolean().optional(),
  organizationId: z.string(),
  createdAt: z.coerce.date().optional(),
  feedbacks: z.lazy(() => FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateInput>;
export const ProjectUncheckedCreateInputObjectZodSchema = makeSchema();
