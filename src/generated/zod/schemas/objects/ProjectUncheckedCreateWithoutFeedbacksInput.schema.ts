import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  rateLimitingEnabled: z.boolean().optional(),
  organizationId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectUncheckedCreateWithoutFeedbacksInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutFeedbacksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutFeedbacksInput>;
export const ProjectUncheckedCreateWithoutFeedbacksInputObjectZodSchema = makeSchema();
