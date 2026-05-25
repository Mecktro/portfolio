'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { honeypotProject } from '@/content/projects/honeypot'
import { cybermapProject } from '@/content/projects/cybermap'
import { tradebotProject } from '@/content/projects/tradebot'

const projects = [honeypotProject, cybermapProject, tradebotProject]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="border-b border-zinc-800 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-4">
            <h1 className="font-mono text-4xl font-bold text-white">Projects</h1>
            <p className="text-zinc-400">
              Engineering systems for threat detection, cloud security, and automated response.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="border-t border-zinc-800 bg-zinc-950 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-8">
            <div>
              <span className="font-mono text-sm text-cyan-400">Featured Project</span>
              <h2 className="mt-2 font-mono text-3xl font-bold text-white">
                {honeypotProject.title}
              </h2>
            </div>
            <div className="space-y-4 text-zinc-300 leading-relaxed whitespace-pre-line">
              {honeypotProject.longDescription}
            </div>
            <div className="flex flex-wrap gap-2">
              {honeypotProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-800 px-4 py-2 font-mono text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
