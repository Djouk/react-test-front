import { FormEvent, useId, useState } from 'react'
import {
  createEmailSubscription,
  EMAIL_SIGNUP_CONSENT_TEXT,
} from '../api/emailSubscriptions'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getEmailError(email: string) {
  if (!email.trim()) {
    return 'Enter your email address.'
  }

  if (!emailPattern.test(email)) {
    return 'Enter a valid email address.'
  }

  return ''
}

export function EmailSignupForm() {
  const emailInputId = useId()
  const consentInputId = useId()
  const emailErrorId = useId()
  const formStatusId = useId()
  const [email, setEmail] = useState('')
  const [hasConsent, setHasConsent] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [consentError, setConsentError] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextEmailError = getEmailError(email)
    const nextConsentError = hasConsent
      ? ''
      : 'Confirm consent before submitting.'

    setEmailError(nextEmailError)
    setConsentError(nextConsentError)

    if (nextEmailError || nextConsentError) {
      setStatus('idle')
      return
    }

    setStatus('submitting')

    try {
      await createEmailSubscription({
        email: email.trim(),
        source: 'profile_page',
        consentText: EMAIL_SIGNUP_CONSENT_TEXT,
      })
      setStatus('success')
      setEmail('')
      setHasConsent(false)
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="signup-form" noValidate onSubmit={handleSubmit}>
      <div className="signup-form__field">
        <label htmlFor={emailInputId}>Email address</label>
        <div className="signup-form__row">
          <input
            aria-describedby={`${emailError ? emailErrorId : ''} ${formStatusId}`}
            aria-invalid={emailError ? 'true' : 'false'}
            autoComplete="email"
            id={emailInputId}
            inputMode="email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value)
              setEmailError('')
            }}
            placeholder="you@example.com"
            type="email"
            value={email}
          />
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Get updates'}
          </button>
        </div>
        {emailError ? (
          <p className="signup-form__error" id={emailErrorId}>
            {emailError}
          </p>
        ) : null}
      </div>

      <label className="signup-form__consent" htmlFor={consentInputId}>
        <input
          checked={hasConsent}
          id={consentInputId}
          name="consent"
          onChange={(event) => {
            setHasConsent(event.target.checked)
            setConsentError('')
          }}
          type="checkbox"
        />
        <span>{EMAIL_SIGNUP_CONSENT_TEXT}</span>
      </label>
      {consentError ? (
        <p className="signup-form__error">{consentError}</p>
      ) : null}

      <p
        className="signup-form__status"
        id={formStatusId}
        role={status === 'error' ? 'alert' : 'status'}
      >
        {status === 'success'
          ? 'Thanks. Your email was submitted.'
          : status === 'error'
            ? 'We could not save your email right now. Please try again later.'
            : 'No tracking or location data is collected by this form.'}
      </p>
    </form>
  )
}
