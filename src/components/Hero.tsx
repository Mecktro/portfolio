'use client'

import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-mono text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-white">Bandi Mohan</span>
            </h1>
            <p className="font-mono text-lg text-zinc-400">
              Security Engineer | OWASP Chapter Leader | Cybersecurity Researcher
            </p>
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300">
              B.Tech Cybersecurity student at G.I.T.A.M University. Passionate about cloud security, 
              offensive security, detection engineering, and AI-assisted security automation. 
              Experienced in AWS, penetration testing, and building threat detection systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-3 font-mono text-sm font-bold text-cyan-400 transition-all hover:bg-cyan-500/20"
            >
              View Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/mecktro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-mecktro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mohanmw930@gmail.com"
              className="text-zinc-400 transition-colors hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
