'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Certifications from '@/components/Certifications'

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="border-b border-zinc-800 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-4">
            <h1 className="font-mono text-4xl font-bold text-white">Certifications</h1>
            <p className="text-zinc-400">
              Professional certifications and verified credentials in cybersecurity and cloud infrastructure.
            </p>
          </div>
        </section>

        <section className="border-t border-zinc-800">
          <Certifications />
        </section>
      </main>
      <Footer />
    </>
  )
}
