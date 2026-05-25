export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  image?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
}

export interface CTFRanking {
  id: string
  name: string
  platform: string
  rank: number
  score: number
}
