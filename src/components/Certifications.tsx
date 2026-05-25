import { certifications } from '@/data/certifications'
import Link from 'next/link'

export default function Certifications() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-mono text-3xl font-bold text-white">Certifications</h2>
          <p className="text-zinc-400">Professional credentials and certifications</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-mono text-lg font-bold text-white">{cert.name}</h3>
                  <p className="text-sm text-cyan-400">{cert.issuer}</p>
                </div>
                <p className="text-sm text-zinc-400">{cert.date}</p>
                {cert.credentialUrl && (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Credential →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
