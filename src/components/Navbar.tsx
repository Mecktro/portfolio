'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Certs', href: '/certifications' },
  { label: 'Achievements', href: '/ctf' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold text-cyan-400">
            Mohan
          </Link>
          <ul className="hidden gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-mono text-sm transition-colors ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
