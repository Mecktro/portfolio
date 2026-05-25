import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log contact form submission
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body,
    })

    // Send email if SendGrid is configured
    if (process.env.SENDGRID_API_KEY) {
      try {
        await sgMail.send({
          to: 'mohanmw930@gmail.com', // Your email
          from: process.env.SENDGRID_FROM_EMAIL || 'noreply@bandi.dev',
          replyTo: body.email,
          subject: `New Contact Form: ${body.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Subject:</strong> ${body.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, '<br>')}</p>
          `,
          text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Subject: ${body.subject}

Message:
${body.message}
          `,
        })

        console.log('Email sent successfully to mohanmw930@gmail.com')
      } catch (emailError) {
        console.error('SendGrid error:', emailError)
        // Still return success to user even if email fails
      }
    }

    return NextResponse.json(
      {
        message: 'Thank you for your message! We will get back to you soon.',
        status: 'success',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
