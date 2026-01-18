import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@/generated/prisma/client'
import { getRequiredEnv } from '@/utils/env'

const databaseUrl = getRequiredEnv('DATABASE_URL')
const adapter = new PrismaPg({ connectionString: databaseUrl })

declare global {
  var __prisma: PrismaClient | undefined
}

/**
 * Prisma client singleton for server usage.
 */
export const prisma = globalThis.__prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma
}
