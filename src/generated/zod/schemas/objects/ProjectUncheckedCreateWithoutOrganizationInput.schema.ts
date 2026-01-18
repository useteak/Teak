import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema as FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './FeedbackUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  rateLimitingEnabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  feedbacks: z.lazy(() => FeedbackUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutOrganizationInput>;
export const ProjectUncheckedCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
