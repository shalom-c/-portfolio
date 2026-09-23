require('dotenv').config()

const cors = require('cors')
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
const port = process.env.PORT || 5000
const allowedOrigins = new Set([
  'https://shalomtakisunday.onrender.com',
  'http://localhost:3000',
  'http://localhost:5173'
])

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true)
      return
    }

    callback(new Error('Origin not allowed by CORS'))
  }
}))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('Backend is running')
})

app.post('/api/contact', async (request, response) => {
  const { name, email, subject, message } = request.body || {}
  const trimmedFields = {
    name: typeof name === 'string' ? name.trim() : '',
    email: typeof email === 'string' ? email.trim() : '',
    subject: typeof subject === 'string' ? subject.trim() : '',
    message: typeof message === 'string' ? message.trim() : ''
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (Object.values(trimmedFields).some((value) => !value)) {
    return response.status(400).json({
      success: false,
      message: 'Name, email, subject, and message are required.'
    })
  }

  if (!emailPattern.test(trimmedFields.email)) {
    return response.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    })
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER and EMAIL_PASS must be configured.')
    return response.status(500).json({
      success: false,
      message: 'Email service is not configured.'
    })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'shalomtakisunday@gmail.com',
      replyTo: trimmedFields.email,
      subject: `Portfolio contact: ${trimmedFields.subject}`,
      text: [
        `Name: ${trimmedFields.name}`,
        `Email: ${trimmedFields.email}`,
        `Subject: ${trimmedFields.subject}`,
        '',
        'Message:',
        trimmedFields.message
      ].join('\n')
    })

    return response.status(200).json({
      success: true,
      message: 'Message sent successfully'
    })
  } catch (error) {
    console.error('Unable to send contact email:', error)
    return response.status(500).json({
      success: false,
      message: 'Unable to send message. Please try again later.'
    })
  }
})

app.listen(port, () => {
  console.log(`Contact backend listening on port ${port}`)
})