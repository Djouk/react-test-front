export const EMAIL_SIGNUP_CONSENT_TEXT =
  'I agree to receive a welcome message from Diogo de Andrade.'

export type EmailSubscriptionRequest = {
  email: string
  source: 'profile_page'
  consentText: string
}

export type EmailSubscriptionResponse = {
  subscription: {
    id: string
    email: string
    status: 'pending' | 'confirmed' | 'unsubscribed'
  }
}

export class EmailSubscriptionError extends Error {
  constructor(message = 'Email subscription request failed.') {
    super(message)
    this.name = 'EmailSubscriptionError'
  }
}

export async function createEmailSubscription(
  request: EmailSubscriptionRequest
): Promise<EmailSubscriptionResponse> {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

  if (!apiBaseUrl) {
    throw new EmailSubscriptionError('Backend API URL is not configured.')
  }

  const response = await fetch(
    `${apiBaseUrl.replace(/\/$/, '')}/email-subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    }
  )

  if (!response.ok) {
    throw new EmailSubscriptionError()
  }

  return response.json() as Promise<EmailSubscriptionResponse>
}
