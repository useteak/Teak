import type { Feedback, FeedbackType, Project } from '@/generated/prisma/client'
import { resend, resendFromEmail } from '@/lib/resend'

/**
 * Communication module for sending notifications to project members.
 * Currently supports email; designed to be extended for Slack and other channels.
 */

export interface FeedbackNotificationRecipient {
  email: string
  name: string
}

export type FeedbackNotificationRecipients =
  Array<FeedbackNotificationRecipient>

export interface FeedbackNotificationData {
  project: Pick<Project, 'id' | 'title'>
  feedback: Pick<Feedback, 'id' | 'description' | 'type' | 'email'>
}

/**
 * Formats the feedback type for display in notifications.
 */
function formatFeedbackType(type: FeedbackType): string {
  switch (type) {
    case 'BUG':
      return 'Bug Report'
    case 'FEATURE_REQUEST':
      return 'Feature Request'
    case 'IMPROVEMENT':
      return 'Improvement Suggestion'
    case 'QUESTION':
      return 'Question'
    case 'PRAISE':
      return 'Praise'
    case 'OTHER':
      return 'Other'
    default:
      return type
  }
}

/**
 * Generates the HTML content for a feedback notification email.
 */
function generateFeedbackEmailHtml(data: FeedbackNotificationData): string {
  const feedbackType = formatFeedbackType(data.feedback.type)
  const submitterInfo = data.feedback.email
    ? `<p><strong>From:</strong> ${data.feedback.email}</p>`
    : '<p><strong>From:</strong> Anonymous</p>'

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a1a;">New Feedback Received</h2>
      <p>Your project <strong>${data.project.title}</strong> has received new feedback.</p>
      
      <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0;">
        <p style="margin: 0 0 8px 0;"><strong>Type:</strong> ${feedbackType}</p>
        ${submitterInfo}
        <p style="margin: 8px 0 0 0;"><strong>Description:</strong></p>
        <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${data.feedback.description}</p>
      </div>
    </div>
  `
}

/**
 * Sends feedback notification emails to all provided recipients.
 * Errors are logged but do not throw to prevent feedback submission failures.
 */
export async function sendFeedbackNotificationEmails(
  recipients: FeedbackNotificationRecipients,
  data: FeedbackNotificationData,
): Promise<void> {
  if (recipients.length === 0) {
    return
  }

  // Only send emails in production
  if (process.env.NODE_ENV !== 'production') {
    console.log(
      `[Communication] Skipping email notifications in non-production environment. Would notify ${recipients.length} recipient(s).`,
    )
    return
  }

  const feedbackType = formatFeedbackType(data.feedback.type)
  const subject = `[${data.project.title}] New ${feedbackType}`
  const html = generateFeedbackEmailHtml(data)

  console.info(
    `[Communication] Sending feedback notification emails to ${recipients.length} recipient(s).`,
  )

  // Use batch sending to send up to 100 emails in a single API call
  const emails = recipients.map((recipient) => ({
    from: resendFromEmail,
    to: recipient.email,
    subject,
    html,
  }))

  try {
    const result = await resend.batch.send(emails)

    if (result.error) {
      console.error(`[Communication] Batch send failed:`, result.error)
    } else {
      console.info(
        `[Communication] Successfully sent ${recipients.length} notification email(s)`,
      )
    }
  } catch (error) {
    console.error(
      `[Communication] Failed to send feedback notification emails:`,
      error,
    )
  }
}

/**
 * Data required to send a confirmation email to a feedback submitter.
 */
export interface FeedbackConfirmationData {
  email: string
  feedbackType: FeedbackType
}

/**
 * Sends a confirmation email to the feedback submitter.
 * Only sends in production environment.
 * Errors are logged but do not throw to prevent feedback submission failures.
 */
export async function sendFeedbackConfirmationEmail(
  data: FeedbackConfirmationData,
): Promise<void> {
  // Only send emails in production
  if (process.env.NODE_ENV !== 'production') {
    console.log(
      `[Communication] Skipping confirmation email in non-production environment. Would send to ${data.email}.`,
    )
    return
  }

  const feedbackType = formatFeedbackType(data.feedbackType).toLowerCase()

  try {
    await resend.emails.send({
      from: resendFromEmail,
      to: data.email,
      subject: 'We received your feedback',
      html: `<p>Thank you for submitting your feedback!</p><p>We've received your ${feedbackType} and our team will review it shortly.</p><p>Your feedback helps us improve our product.</p>`,
    })
  } catch (error) {
    console.error(
      `[Communication] Failed to send feedback confirmation email to ${data.email}:`,
      error,
    )
  }
}

// Future: Add Slack notification support
// export async function sendFeedbackNotificationSlack(
//   webhookUrl: string,
//   data: FeedbackNotificationData,
// ): Promise<void> {
//   // Implementation for Slack notifications
// }
