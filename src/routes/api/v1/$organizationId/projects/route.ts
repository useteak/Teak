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
 * Schema for creating a project.
 */
const CreateProjectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
})

export const Route = createFileRoute('/api/v1/$organizationId/projects')({
  server: {
    handlers: {
      /**
       * GET /api/v1/:organizationId/projects
       * List all projects for an organization (authenticated).
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

          // Fetch all projects for the organization
          const projects = await prisma.project.findMany({
            where: {
              organizationId: organizationId,
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          return apiSuccess(projects)
        } catch (error) {
          console.error('Error listing projects:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },

      /**
       * POST /api/v1/:organizationId/projects
       * Create a new project (authenticated).
       * Auto-adds all organization users as members with notifyOnFeedback=false.
       */
      POST: async ({ request, params }) => {
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
          const parsedBody = CreateProjectSchema.safeParse(body)
          if (!parsedBody.success) {
            return apiError(
              'VALIDATION_ERROR',
              'Invalid request body',
              400,
              parsedBody.error.flatten().fieldErrors,
            )
          }

          // Get organization with users
          const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            include: {
              users: {
                select: { id: true },
              },
            },
          })

          if (!organization) {
            return apiError('NOT_FOUND', 'Organization not found', 404)
          }

          // Create project with all org users as members
          const project = await prisma.project.create({
            data: {
              title: parsedBody.data.title,
              organization: {
                connect: { id: organization.id },
              },
              members: {
                create: organization.users.map((user) => ({
                  userId: user.id,
                  notifyOnFeedback: false,
                })),
              },
            },
          })

          return apiSuccess(project, 201)
        } catch (error) {
          console.error('Error creating project:', error)
          return apiError('INTERNAL_ERROR', 'An unexpected error occurred', 500)
        }
      },
    },
  },
})
