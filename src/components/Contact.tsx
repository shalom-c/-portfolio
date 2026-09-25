import React, { useCallback, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2 } from 'lucide-react'

emailjs.init('saQah_iNJwfdPb4MQ')

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

type FormErrors = Partial<Record<keyof FormState, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getEmailErrorMessage(error: unknown): string {
  if (error && typeof error === 'object' && 'text' in error && typeof error.text === 'string') {
    const status = 'status' in error && typeof error.status === 'number' ? ` (${error.status})` : ''
    return `${error.text}${status}`
  }

  if (error instanceof Error) return error.message
  return String(error)
}

function validateForm(formData: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!formData.name.trim()) errors.name = 'Please enter your name.'
  if (!formData.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!formData.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!formData.message.trim()) errors.message = 'Please enter a message.'

  return errors
}

type SuccessModalProps = {
  phase: 'closed' | 'open' | 'closing'
  onClose: () => void
}

function SuccessModal({ phase, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (phase !== 'open') return

    const timeoutId = window.setTimeout(onClose, 6000)
    return () => window.clearTimeout(timeoutId)
  }, [onClose, phase])

  if (phase === 'closed') return null

  return (
    <div
      className={`success-modal-overlay ${phase === 'closing' ? 'success-modal-overlay-closing' : ''}`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className={`success-modal ${phase === 'closing' ? 'success-modal-closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <CheckCircle2 className="success-modal-icon" size={48} strokeWidth={1.8} aria-hidden="true" />
        <h2 id="success-modal-title" className="mt-4 text-2xl font-bold">Message Sent!</h2>
        <p id="success-modal-description" className="mt-3 muted">
          Thank you for reaching out. I've received your message and will get back to you within 24 hours.
        </p>
      </div>
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successModalPhase, setSuccessModalPhase] = useState<'closed' | 'open' | 'closing'>('closed')

  const closeSuccessModal = useCallback(() => {
    setSuccessModalPhase((phase) => phase === 'open' ? 'closing' : phase)
  }, [])

  useEffect(() => {
    if (successModalPhase !== 'closing') return

    const timeoutId = window.setTimeout(() => setSuccessModalPhase('closed'), 220)
    return () => window.clearTimeout(timeoutId)
  }, [successModalPhase])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setErrorMessage('')
    setStatus('idle')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setErrorMessage('')
      setStatus('idle')
      return
    }

    setStatus('submitting')

    try {
      await emailjs.send('service_aeclj5p', 'template_2remz9q', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })

      setFormData(initialForm)
      setErrors({})
      setErrorMessage('')
      setStatus('success')
      setSuccessModalPhase('open')
    } catch (error) {
      const message = getEmailErrorMessage(error)
      console.error('EmailJS contact form error:', error)
      setErrorMessage(message)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="contact-copy-reveal">
          <h2 className="text-3xl font-bold">Let's Work Together</h2>
          <p className="mt-4 muted">Have a project, job opportunity or collaboration in mind? I'd be happy to hear from you.</p>
          <p className="mt-4 muted">Email: <a href="mailto:shalomtakisunday@gmail.com">shalomtakisunday@gmail.com</a></p>
          <p className="mt-2 muted">Phone: +2348027058175</p>
          <p className="mt-2 muted">Location: Nigeria</p>
        </div>

        <form className="space-y-4 contact-form-reveal" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium">Name</label>
            <input
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`contact-field mt-1 block w-full border rounded p-2 bg-slate-800 min-h-11 ${errors.name ? 'border-red-400' : 'border-slate-700'}`}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && <p id="contact-name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`contact-field mt-1 block w-full border rounded p-2 bg-slate-800 min-h-11 ${errors.email ? 'border-red-400' : 'border-slate-700'}`}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && <p id="contact-email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`contact-field mt-1 block w-full border rounded p-2 bg-slate-800 min-h-11 ${errors.subject ? 'border-red-400' : 'border-slate-700'}`}
              required
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
            />
            {errors.subject && <p id="contact-subject-error" className="mt-1 text-sm text-red-400">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`contact-field mt-1 block w-full border rounded p-2 bg-slate-800 ${errors.message ? 'border-red-400' : 'border-slate-700'}`}
              rows={6}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && <p id="contact-message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <div>
            <button type="submit" disabled={status === 'submitting'} className="button-motion min-h-11 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 transition-colors inline-flex items-center gap-2">
              {status === 'submitting' && <span className="spinner" aria-hidden="true" />}
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          <p className="text-sm" aria-live="polite">
            {status === 'success' && <span key="success" className="status-reveal inline-block text-emerald-400">Message sent!</span>}
            {status === 'error' && (
              <span key="error" className="status-reveal inline-block text-red-400">
                {import.meta.env.DEV ? `EmailJS error: ${errorMessage}` : 'Something went wrong. Please try again.'}
              </span>
            )}
          </p>
        </form>
      </div>

      <SuccessModal
        phase={successModalPhase}
        onClose={closeSuccessModal}
      />
    </section>
  )
}
