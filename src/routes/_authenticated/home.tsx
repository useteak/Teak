import { createFileRoute, redirect } from '@tanstack/react-router'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'

const getFirstOrganization = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  if (!session || !session.user.id) {
    return null
  }

  const organization = await prisma.organization.findFirst({
    where: {
      users: {
        some: {
          id: session.user.id,
        },
      },
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  return organization?.id ?? null
})

export const Route = createFileRoute('/_authenticated/home')({
  loader: async () => {
    const organizationId = await getFirstOrganization()

    if (organizationId) {
      throw redirect({
        to: '/$organizationId',
        params: { organizationId },
      })
    }

    throw redirect({
      to: '/new-organization',
    })
  },
})
