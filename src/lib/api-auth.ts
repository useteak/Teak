import { prisma } from '@/lib/database'

/**
 * Result of API key authentication.
 */
export type ApiAuthResult =
  | { success: true; organizationId: string }
  | { success: false; response: Response }

/**
 * Standard JSON error response for API routes.
 */
export function apiError(
  code: string,
  message: string,
  status: number,
  details?: unknown,
): Response {
  return Response.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details !== undefined && { details }),
      },
    },
    { status },
  )
}

/**
 * Standard JSON success response for API routes.
 */
export function apiSuccess<T>(data: T, status = 200): Response {
  return Response.json({ success: true, data }, { status })
}

/**
 * Authenticate a request using an API key from the Authorization header.
 *
 * Expects: `Authorization: Bearer <apiKeyId>`
 *
 * Returns the organizationId if valid, or an error Response otherwise.
 */
export async function authenticateApiKey(
  request: Request,
): Promise<ApiAuthResult> {
  const authHeader = request.headers.get('authorization')

  if (!authHeader) {
    return {
      success: false,
      response: apiError('UNAUTHORIZED', 'Missing Authorization header', 401),
    }
  }

  const parts = authHeader.split(' ')
  if (parts.length !== 2 || parts[0].toLowerCase() !== 'bearer') {
    return {
      success: false,
      response: apiError(
        'UNAUTHORIZED',
        'Invalid Authorization header format. Expected: Bearer <apiKey>',
        401,
      ),
    }
  }

  const apiKeyId = parts[1]

  const apiKey = await prisma.apiKey.findUnique({
    where: { id: apiKeyId },
    select: { organizationId: true },
  })

  if (!apiKey) {
    return {
      success: false,
      response: apiError('UNAUTHORIZED', 'Invalid API key', 401),
    }
  }

  return { success: true, organizationId: apiKey.organizationId }
}

/**
 * Verify that the authenticated organization matches the requested organizationId.
 * Returns an error response if they don't match.
 */
export function verifyOrganizationAccess(
  authenticatedOrgId: string,
  requestedOrgId: string,
): Response | null {
  if (authenticatedOrgId !== requestedOrgId) {
    return apiError('NOT_FOUND', 'Organization not found', 404)
  }
  return null
}
