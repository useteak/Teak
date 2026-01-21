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
 * Schema for updating an organization.
 */
const UpdateOrganizationSchema = z.object({
  name: z.string().min(1, 'Organization name is required').optional(),
  image: z.string().url('Image must be a valid URL').nullable().optional(),
})

export const Route = createFileRoute('/api/v1/$organizationId')({
  server: {
    handlers: {
      /**
       * GET /api/v1/:organizationId
       * Get organization details (authenticated).
       */
      GET: async ({ request, params }) => {
        const { organizationId } = params

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

          // Fetch the organization
          const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: {
              id: true,
              name: true,
              image: true,
              createdAt: true,
              updatedAt: true,
            },
          })

          if (!organization) {
            return apiError('NOT_FOUND', 'Organization not found', 404)
          }

          return apiSuccess(organization)
        } catch (error) {
          console.error('Error getting organization:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },

      /**
       * PATCH /api/v1/:organizationId
       * Update organization details (authenticated).
       */
      PATCH: async ({ request, params }) => {
        const { organizationId } = params

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
          const parsedBody = UpdateOrganizationSchema.safeParse(body)
          if (!parsedBody.success) {
            return apiError(
              'VALIDATION_ERROR',
              'Invalid request body',
              400,
              parsedBody.error.flatten().fieldErrors,
            )
          }

          // Verify organization exists
          const existingOrg = await prisma.organization.findUnique({
            where: { id: organizationId },
          })

          if (!existingOrg) {
            return apiError('NOT_FOUND', 'Organization not found', 404)
          }

          // Update the organization
          const organization = await prisma.organization.update({
            where: { id: organizationId },
            data: {
              ...(parsedBody.data.name !== undefined && {
                name: parsedBody.data.name,
              }),
              ...(parsedBody.data.image !== undefined && {
                image: parsedBody.data.image,
              }),
            },
            select: {
              id: true,
              name: true,
              image: true,
              createdAt: true,
              updatedAt: true,
            },
          })

          return apiSuccess(organization)
        } catch (error) {
          console.error('Error updating organization:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },
    },
  },
})
