export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon?: string
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Rank 1 – Attack & Defense CTF',
    description: 'SentinelOne Attack & Defense CTF Championship',
    date: '2025',
  },
  {
    id: '2',
    title: 'Rank 8 – Glacier CTF',
    description: 'Glacier Capture The Flag Competition',
    date: '2025',
  },
  {
    id: '3',
    title: 'Rank 12 – c0nc0nCTF 2025',
    description: 'c0nc0n CTF 2025 Challenge Competition',
    date: '2025',
  },
  {
    id: '4',
    title: 'Top 20 – Phantom Flags 2.0 CTF',
    description: 'Phantom Flags 2.0 CTF Competition',
    date: '2024',
  },
  {
    id: '5',
    title: 'Top 30 – UST Global CTF',
    description: 'UST Global Capture The Flag - All India Rank (AIR)',
    date: '2024',
  },
  {
    id: '6',
    title: 'Digipol Hackathon Recognition',
    description: 'Recognition at Digipol Hackathon - Ministry of Defence Initiative',
    date: '2024',
  },
]
