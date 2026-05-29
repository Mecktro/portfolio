'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CTFPage() {
  const achievements = [
    {
      id: 'tryhackme-top-15',
      title: 'TryHackMe Top 15%',
      description: 'TryHackMe profile and learning path progress: https://tryhackme.com/p/mecktro',
      date: '2026',
    },
    {
      id: 'picoctf-2026-team-rank',
      title: 'picoCTF 2026 Team Rank #1219',
      description: 'Final team rank in picoCTF 2026 challenge event',
      date: '2026',
    },
    {
      id: 'rank-1-attack-defense-ctf',
      title: 'Rank 1 – Attack & Defense CTF',
      description: 'SentinelOne Attack & Defense CTF',
      date: '2025',
    },
    {
      id: 'rank-8-glacier-ctf',
      title: 'Rank 8 – Glacier CTF',
      description: 'Glacier Capture The Flag competition',
      date: '2025',
    },
    {
      id: 'rank-12-conconctf-2025',
      title: 'Rank 12 – c0nc0nCTF 2025',
      description: 'c0nc0nCTF 2025 challenge event',
      date: '2025',
    },
    {
      id: 'top-20-phantom-flags',
      title: 'Top 20 – Phantom Flags 2.0 CTF',
      description: 'Phantom Flags 2.0 Capture The Flag event',
      date: '2024',
    },
    {
      id: 'top-30-air-ust-global-ctf',
      title: 'Top 30 AIR – UST Global CTF',
      description: 'UST Global CTF All-India Rank',
      date: '2024',
    },
    {
      id: 'digipol-hackathon-recognition',
      title: 'Recognition – Digipol Hackathon',
      description: 'Ministry of Defence initiative recognition',
      date: '2024',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="border-b border-zinc-800 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-4">
            <h1 className="font-mono text-4xl font-bold text-white">Achievements</h1>
            <p className="text-zinc-400">2023–2026 security competition achievements and recognition.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2">
                    <h2 className="font-mono text-xl font-bold text-white">{achievement.title}</h2>
                    <p className="text-zinc-400">{achievement.description}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-sm font-mono text-cyan-400">
                    {achievement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
