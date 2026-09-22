import React, { useState } from 'react'

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

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return
    }

    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold">Let's Work Together</h2>
          <p className="mt-4 muted">Have a project, job opportunity or collaboration in mind? I'd be happy to hear from you.</p>
          <p className="mt-4 muted">Email: <a href="mailto:shalomtakisunday@gmail.com">shalomtakisunday@gmail.com</a></p>
          <p className="mt-2 muted">Phone: +2348027058175</p>
          <p className="mt-2 muted">Location: Nigeria</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2 bg-slate-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2 bg-slate-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2 bg-slate-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2 bg-slate-800"
              rows={6}
              required
            />
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors">
              Send Message
            </button>
          </div>

          {submitted && (
            <p className="text-sm text-emerald-400" aria-live="polite">
              Your message has been drafted locally. I’ll review it when you send it manually.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
