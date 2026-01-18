import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import * as z from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'

const getFirstProject = createServerFn()
  .inputValidator(z.object({ organizationId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    if (!session || !session.user.id) {
      return null
    }

    const project = await prisma.project.findFirst({
      where: {
        organization: {
          id: data.organizationId,
          users: {
            some: {
              id: session.user.id,
            },
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    return project?.id ?? null
  })

export const Route = createFileRoute('/_authenticated/$organizationId/')({
  loader: async ({ params }) => {
    const projectId = await getFirstProject({
      data: { organizationId: params.organizationId },
    })

    if (projectId) {
      throw redirect({
        to: '/$organizationId/projects/$projectId/feedback',
        params: {
          organizationId: params.organizationId,
          projectId,
        },
      })
    }

    throw redirect({
      to: '/$organizationId/projects/new',
      params: {
        organizationId: params.organizationId,
      },
    })
  },
})
