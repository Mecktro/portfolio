'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CTFPage() {
  const rankings = [
    {
      platform: 'HackTheBox',
      rank: 1,
      score: 4500,
      url: '#',
    },
    {
      platform: 'TryHackMe',
      rank: 10,
      score: 3200,
      url: '#',
    },
    {
      platform: 'PicoCTF',
      rank: 5,
      score: 2800,
      url: '#',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="border-b border-zinc-800 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-4">
            <h1 className="font-mono text-4xl font-bold text-white">Achievements</h1>
            <p className="text-zinc-400">
              Capture The Flag competitions and security challenge rankings.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-mono text-2xl font-bold text-white">CTF Rankings</h2>
            <div className="space-y-4">
              {rankings.map((ranking) => (
                <div
                  key={ranking.platform}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-mono font-bold text-white">{ranking.platform}</h3>
                    <p className="text-sm text-zinc-500">Rank #{ranking.rank}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xl font-bold text-cyan-400">{ranking.score}</p>
                    <p className="text-sm text-zinc-500">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
