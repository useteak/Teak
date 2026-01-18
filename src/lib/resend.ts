import { Resend } from 'resend'
import { getRequiredEnv } from '@/utils/env'

const resendApiKey = getRequiredEnv('RESEND_API_KEY')

/**
 * Resend client configured with the API key.
 */
export const resend = new Resend(resendApiKey)

/**
 * Default sender address for outgoing emails.
 */
export const resendFromEmail =
  process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
