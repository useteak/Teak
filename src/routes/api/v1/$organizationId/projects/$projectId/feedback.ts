import { createFileRoute } from '@tanstack/react-router'
import { prisma } from '@/db'
import { FeedbackInputSchema } from '@/generated/zod/schemas'

/**
 * Public API endpoint for submitting feedback.
 * POST /api/v1/:organizationId/projects/:projectId/feedback
 *
 * This endpoint is unauthenticated. In the future, we may add support for
 * "trusted domains" to restrict which origins can submit feedback.
 */

// Request body schema - only the fields customers should provide
const FeedbackRequestSchema = FeedbackInputSchema.pick({
  description: true,
  type: true,
  email: true,
})

export const Route = createFileRoute(
  '/api/v1/$organizationId/projects/$projectId/feedback',
)({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        // TODO: Add trusted domain validation here when implemented
        // const origin = request.headers.get('origin')
        // if (!isAllowedOrigin(origin, project.trustedDomains)) { ... }

        try {
          // Validate Content-Type
          const contentType = request.headers.get('content-type')
          if (!contentType?.includes('application/json')) {
            return Response.json(
              {
                success: false,
                error: {
                  code: 'UNSUPPORTED_MEDIA_TYPE',
                  message: 'Content-Type must be application/json',
                },
              },
              { status: 415 },
            )
          }

          // Parse JSON body
          let body: unknown
          try {
            body = await request.json()
          } catch {
            return Response.json(
              {
                success: false,
                error: {
                  code: 'INVALID_JSON',
                  message: 'Request body must be valid JSON',
                },
              },
              { status: 400 },
            )
          }

          // Validate request body
          const parseResult = FeedbackRequestSchema.safeParse(body)
          if (!parseResult.success) {
            return Response.json(
              {
                success: false,
                error: {
                  code: 'VALIDATION_ERROR',
                  message: 'Invalid request body',
                  details: parseResult.error.flatten().fieldErrors,
                },
              },
              { status: 400 },
            )
          }

          const { organizationId, projectId } = params

          // Verify project exists and belongs to the organization
          const project = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!project) {
            return Response.json(
              {
                success: false,
                error: {
                  code: 'NOT_FOUND',
                  message: 'Project not found',
                },
              },
              { status: 404 },
            )
          }

          // Create feedback
          const feedback = await prisma.feedback.create({
            data: {
              description: parseResult.data.description,
              type: parseResult.data.type,
              email: parseResult.data.email,
              projectId: project.id,
            },
          })

          return Response.json(
            {
              success: true,
              feedback: {
                id: feedback.id,
                description: feedback.description,
                type: feedback.type,
                email: feedback.email,
                createdAt: feedback.createdAt,
              },
            },
            { status: 201 },
          )
        } catch (error) {
          console.error('Error creating feedback:', error)
          return Response.json(
            {
              success: false,
              error: {
                code: 'INTERNAL_ERROR',
                message: 'An unexpected error occurred',
              },
            },
            { status: 500 },
          )
        }
      },
    },
  },
})
