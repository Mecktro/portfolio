'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="border-b border-zinc-800 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-4">
            <h1 className="font-mono text-4xl font-bold text-white">Research & Writing</h1>
            <p className="text-zinc-400">
              Security research notes on cloud infrastructure, threat detection, and offensive
              security techniques.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-8">
            {/* Coming Soon Placeholder */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
              <div className="space-y-4">
                <h3 className="font-mono text-lg font-bold text-cyan-400">
                  AWS Cloud Threat Detection
                </h3>
                <p className="text-zinc-400">
                  Practical guide on building threat detection systems in AWS. Coming soon.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                    AWS
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                    Security
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
              <div className="space-y-4">
                <h3 className="font-mono text-lg font-bold text-cyan-400">
                  Kubernetes Security Hardening
                </h3>
                <p className="text-zinc-400">
                  Security best practices and threat modeling for Kubernetes deployments.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                    Kubernetes
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                    DevOps
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
              <div className="space-y-4">
                <h3 className="font-mono text-lg font-bold text-cyan-400">
                  AI Security Automation
                </h3>
                <p className="text-zinc-400">
                  Using LLMs for threat intelligence enrichment and automated security response.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                    AI/ML
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300">
                    Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
