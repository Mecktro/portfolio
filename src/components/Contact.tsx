'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const contacts = [
    {
      name: 'GitHub',
      url: 'https://github.com/mecktro',
      icon: Github,
      color: 'hover:text-white',
      bgColor: 'hover:bg-zinc-800',
      description: 'Check out my repositories and projects',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohan-mecktro',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/10',
      description: 'Connect with me professionally',
    },
    {
      name: 'Email',
      url: 'mailto:mohanmw930@gmail.com',
      icon: Mail,
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-500/10',
      description: 'Send me a direct message',
    },
  ]

  return (
    <section className="border-t border-zinc-800 bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-mono text-2xl font-bold text-white">Get In Touch</h2>
            <p className="text-zinc-400">
              Reach out through any of these channels. I'd love to connect!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.name}
                  href={contact.url}
                  target={contact.name !== 'Email' ? '_blank' : undefined}
                  rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`group flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 transition-all ${contact.bgColor} hover:border-zinc-700`}
                >
                  <div className={`mb-4 rounded-lg bg-zinc-800/50 p-6 transition-colors ${contact.color}`}>
                    <Icon size={48} />
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white">{contact.name}</h3>
                  <p className="mt-2 text-center text-sm text-zinc-400">{contact.description}</p>
                </a>
              )
            })}
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="font-mono text-lg font-bold text-white mb-4">Or send me a message</h3>
            {submitted && (
              <div className="mb-4 rounded-lg bg-green-500/10 border border-green-500 p-4">
                <p className="text-green-400 font-mono text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            {error && (
              <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500 p-4">
                <p className="text-red-400 font-mono text-sm">✗ Error: {error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black border border-zinc-800 px-4 py-2 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black border border-zinc-800 px-4 py-2 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black border border-zinc-800 px-4 py-2 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg bg-black border border-zinc-800 px-4 py-2 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-cyan-500/10 border border-cyan-500 px-6 py-3 font-mono font-bold text-cyan-400 transition-all hover:bg-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
