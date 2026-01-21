import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import type { Prisma } from '@/generated/prisma/client'
import { prisma } from '@/lib/database'
import { FeedbackInputSchema } from '@/generated/zod/schemas'
import {
  apiError,
  apiSuccess,
  authenticateApiKey,
  verifyOrganizationAccess,
} from '@/lib/api-auth'

/**
 * Update schema - all fields optional for partial updates.
 */
const FeedbackUpdateSchema = FeedbackInputSchema.pick({
  description: true,
  type: true,
  email: true,
})
  .partial()
  .extend({
    metadata: z.record(z.string(), z.unknown()).optional().nullable(),
  })

export const Route = createFileRoute(
  '/api/v1/$organizationId/projects/$projectId/feedback/$feedbackId',
)({
  server: {
    handlers: {
      /**
       * GET /api/v1/:organizationId/projects/:projectId/feedback/:feedbackId
       * Get a single feedback item (authenticated).
       */
      GET: async ({ request, params }) => {
        const { organizationId, projectId, feedbackId } = params

        try {
          // Authenticate via API key
          const authResult = await authenticateApiKey(request)
          if (!authResult.success) {
            return authResult.response
          }

          // Verify organization access
          const accessError = verifyOrganizationAccess(
            authResult.organizationId,
            organizationId,
          )
          if (accessError) {
            return accessError
          }

          // Verify project exists and belongs to the organization
          const project = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!project) {
            return apiError('NOT_FOUND', 'Project not found', 404)
          }

          // Fetch the feedback item
          const feedback = await prisma.feedback.findFirst({
            where: {
              id: feedbackId,
              projectId: project.id,
            },
          })

          if (!feedback) {
            return apiError('NOT_FOUND', 'Feedback not found', 404)
          }

          return apiSuccess(feedback)
        } catch (error) {
          console.error('Error getting feedback:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },

      /**
       * PATCH /api/v1/:organizationId/projects/:projectId/feedback/:feedbackId
       * Update a feedback item (authenticated).
       */
      PATCH: async ({ request, params }) => {
        const { organizationId, projectId, feedbackId } = params

        try {
          // Authenticate via API key
          const authResult = await authenticateApiKey(request)
          if (!authResult.success) {
            return authResult.response
          }

          // Verify organization access
          const accessError = verifyOrganizationAccess(
            authResult.organizationId,
            organizationId,
          )
          if (accessError) {
            return accessError
          }

          // Validate Content-Type
          const contentType = request.headers.get('content-type')
          if (!contentType?.includes('application/json')) {
            return apiError(
              'UNSUPPORTED_MEDIA_TYPE',
              'Content-Type must be application/json',
              415,
            )
          }

          // Parse JSON body
          let body: unknown
          try {
            body = await request.json()
          } catch {
            return apiError(
              'INVALID_JSON',
              'Request body must be valid JSON',
              400,
            )
          }

          // Validate request body
          const parsedBody = FeedbackUpdateSchema.safeParse(body)
          if (!parsedBody.success) {
            return apiError(
              'VALIDATION_ERROR',
              'Invalid request body',
              400,
              parsedBody.error.flatten().fieldErrors,
            )
          }

          // Verify project exists and belongs to the organization
          const project = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!project) {
            return apiError('NOT_FOUND', 'Project not found', 404)
          }

          // Verify feedback exists and belongs to the project
          const existingFeedback = await prisma.feedback.findFirst({
            where: {
              id: feedbackId,
              projectId: project.id,
            },
          })

          if (!existingFeedback) {
            return apiError('NOT_FOUND', 'Feedback not found', 404)
          }

          // Update the feedback
          const feedback = await prisma.feedback.update({
            where: { id: feedbackId },
            data: {
              ...(parsedBody.data.description !== undefined && {
                description: parsedBody.data.description,
              }),
              ...(parsedBody.data.type !== undefined && {
                type: parsedBody.data.type,
              }),
              ...(parsedBody.data.email !== undefined && {
                email: parsedBody.data.email,
              }),
              ...(parsedBody.data.metadata !== undefined && {
                metadata: parsedBody.data.metadata as Prisma.InputJsonValue,
              }),
            },
          })

          return apiSuccess(feedback)
        } catch (error) {
          console.error('Error updating feedback:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },

      /**
       * DELETE /api/v1/:organizationId/projects/:projectId/feedback/:feedbackId
       * Delete a feedback item (authenticated).
       */
      DELETE: async ({ request, params }) => {
        const { organizationId, projectId, feedbackId } = params

        try {
          // Authenticate via API key
          const authResult = await authenticateApiKey(request)
          if (!authResult.success) {
            return authResult.response
          }

          // Verify organization access
          const accessError = verifyOrganizationAccess(
            authResult.organizationId,
            organizationId,
          )
          if (accessError) {
            return accessError
          }

          // Verify project exists and belongs to the organization
          const project = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!project) {
            return apiError('NOT_FOUND', 'Project not found', 404)
          }

          // Verify feedback exists and belongs to the project
          const existingFeedback = await prisma.feedback.findFirst({
            where: {
              id: feedbackId,
              projectId: project.id,
            },
          })

          if (!existingFeedback) {
            return apiError('NOT_FOUND', 'Feedback not found', 404)
          }

          // Delete the feedback
          await prisma.feedback.delete({
            where: { id: feedbackId },
          })

          return apiSuccess({ deleted: true })
        } catch (error) {
          console.error('Error deleting feedback:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },
    },
  },
})
