export interface CTFRanking {
  platform: string
  rank: number
  score: number
  lastUpdated: string
}

export const ctfRankings: CTFRanking[] = [
  {
    platform: 'HackTheBox',
    rank: 1,
    score: 4500,
    lastUpdated: '2024-01-25',
  },
  {
    platform: 'TryHackMe',
    rank: 10,
    score: 3200,
    lastUpdated: '2024-01-25',
  },
]
