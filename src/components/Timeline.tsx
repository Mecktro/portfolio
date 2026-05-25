'use client'

import { experiences } from '@/data/experience'

export default function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="space-y-8">
        <div>
          <h2 className="font-mono text-2xl font-bold text-white">Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="border-l-2 border-cyan-500 pl-6 transition-opacity hover:opacity-80"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="font-mono text-lg font-bold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-zinc-500">{exp.duration}</span>
                </div>
                <p className="font-mono text-sm text-cyan-400">{exp.company}</p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-800 px-2 py-1 font-mono text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
