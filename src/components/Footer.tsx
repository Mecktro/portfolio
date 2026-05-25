import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-mono text-sm text-zinc-400">
            © 2026 Bandi Mohan. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/mecktro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-mecktro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mohanmw930@gmail.com"
              className="transition-colors hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
