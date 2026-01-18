import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import type { Prisma } from '@/generated/prisma/client'
import { prisma } from '@/lib/database'
import { FeedbackInputSchema } from '@/generated/zod/schemas'
import { checkRateLimit, getClientIp } from '@/utils/rate-limit'
import { resend, resendFromEmail } from '@/lib/resend'

/** Rate limit: 5 requests per 60 seconds per IP */
const feedbackRateLimit = { limit: 5, window: 60 * 1000 }

/**
 * Public API endpoint for submitting feedback.
 * POST /api/v1/:organizationId/projects/:projectId/feedback
 *
 * This endpoint is unauthenticated. In the future, we may add support for
 * "trusted domains" to restrict which origins can submit feedback.
 */

/**
 * Request body schema - only the fields customers should provide.
 * We override the metadata field to ensure it's a plain object.
 */
const FeedbackRequestSchema = FeedbackInputSchema.pick({
  description: true,
  type: true,
  email: true,
}).extend({
  metadata: z.record(z.string(), z.unknown()).optional().nullable(),
})

export const Route = createFileRoute(
  '/api/v1/$organizationId/projects/$projectId/feedback',
)({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        const { organizationId, projectId } = params

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
          const parsedBody = FeedbackRequestSchema.safeParse(body)
          if (!parsedBody.success) {
            return Response.json(
              {
                success: false,
                error: {
                  code: 'VALIDATION_ERROR',
                  message: 'Invalid request body',
                  details: parsedBody.error.flatten().fieldErrors,
                },
              },
              { status: 400 },
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

          // Rate limit by client IP and project (only if enabled)
          if (project.rateLimitingEnabled) {
            const clientIp = getClientIp(request)
            const rateLimitKey = `${clientIp}:${organizationId}:${projectId}`
            const rateLimitResult = checkRateLimit(
              rateLimitKey,
              feedbackRateLimit,
            )

            if (!rateLimitResult.allowed) {
              const retryAfterSeconds = Math.ceil(
                rateLimitResult.retryAfterMs / 1000,
              )
              return Response.json(
                {
                  success: false,
                  error: {
                    code: 'RATE_LIMIT_EXCEEDED',
                    message: `Too many requests. Please try again in ${retryAfterSeconds} seconds.`,
                  },
                },
                {
                  status: 429,
                  headers: {
                    'Retry-After': String(retryAfterSeconds),
                  },
                },
              )
            }
          }

          // TODO: Add trusted domain validation here when implemented
          // const origin = request.headers.get('origin')
          // if (!isAllowedOrigin(origin, project.trustedDomains)) { ... }

          // Create feedback
          const feedback = await prisma.feedback.create({
            data: {
              description: parsedBody.data.description,
              type: parsedBody.data.type,
              email: parsedBody.data.email,
              metadata: parsedBody.data.metadata,
              projectId: project.id,
            },
          })

          // Send confirmation email in production if email was provided
          if (process.env.NODE_ENV === 'production' && parsedBody.data.email) {
            try {
              await resend.emails.send({
                from: resendFromEmail,
                to: parsedBody.data.email,
                subject: `We received your feedback`,
                html: `<p>Thank you for submitting your feedback!</p><p>We've received your ${parsedBody.data.type.toLowerCase()} and our team will review it shortly.</p><p>Your feedback helps us improve our product.</p>`,
              })
            } catch (emailError) {
              // Log but don't fail the request if email fails
              console.error(
                'Failed to send feedback confirmation email:',
                emailError,
              )
            }
          }

          return Response.json(
            {
              success: true,
              feedback,
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
