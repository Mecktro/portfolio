'use client'

import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      {image && (
        <div className="aspect-video overflow-hidden bg-zinc-950">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-mono text-lg font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-mono text-cyan-400 transition-colors hover:text-cyan-300"
            >
              View <ExternalLink size={14} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-mono text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Code <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
