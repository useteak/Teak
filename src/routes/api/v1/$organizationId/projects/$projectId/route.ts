import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import { prisma } from '@/lib/database'
import {
  apiError,
  apiSuccess,
  authenticateApiKey,
  verifyOrganizationAccess,
} from '@/lib/api-auth'

/**
 * Schema for updating a project.
 */
const UpdateProjectSchema = z.object({
  title: z.string().min(1, 'Project title is required').optional(),
  rateLimitingEnabled: z.boolean().optional(),
})

export const Route = createFileRoute(
  '/api/v1/$organizationId/projects/$projectId',
)({
  server: {
    handlers: {
      /**
       * GET /api/v1/:organizationId/projects/:projectId
       * Get a single project (authenticated).
       */
      GET: async ({ request, params }) => {
        const { organizationId, projectId } = params

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

          // Fetch the project
          const project = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!project) {
            return apiError('NOT_FOUND', 'Project not found', 404)
          }

          return apiSuccess(project)
        } catch (error) {
          console.error('Error getting project:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },

      /**
       * PATCH /api/v1/:organizationId/projects/:projectId
       * Update a project (authenticated).
       */
      PATCH: async ({ request, params }) => {
        const { organizationId, projectId } = params

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
          const parsedBody = UpdateProjectSchema.safeParse(body)
          if (!parsedBody.success) {
            return apiError(
              'VALIDATION_ERROR',
              'Invalid request body',
              400,
              parsedBody.error.flatten().fieldErrors,
            )
          }

          // Verify project exists and belongs to the organization
          const existingProject = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!existingProject) {
            return apiError('NOT_FOUND', 'Project not found', 404)
          }

          // Update the project
          const project = await prisma.project.update({
            where: { id: projectId },
            data: {
              ...(parsedBody.data.title !== undefined && {
                title: parsedBody.data.title,
              }),
              ...(parsedBody.data.rateLimitingEnabled !== undefined && {
                rateLimitingEnabled: parsedBody.data.rateLimitingEnabled,
              }),
            },
          })

          return apiSuccess(project)
        } catch (error) {
          console.error('Error updating project:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },

      /**
       * DELETE /api/v1/:organizationId/projects/:projectId
       * Delete a project (authenticated).
       */
      DELETE: async ({ request, params }) => {
        const { organizationId, projectId } = params

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
          const existingProject = await prisma.project.findFirst({
            where: {
              id: projectId,
              organizationId: organizationId,
            },
          })

          if (!existingProject) {
            return apiError('NOT_FOUND', 'Project not found', 404)
          }

          // Delete the project (cascade will handle members and feedback)
          await prisma.project.delete({
            where: { id: projectId },
          })

          return apiSuccess({ deleted: true })
        } catch (error) {
          console.error('Error deleting project:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },
    },
  },
})
