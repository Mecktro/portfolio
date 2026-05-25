interface SkillCategory {
  category: string
  items: string[]
}

interface SkillGridProps {
  skills: SkillCategory[]
}

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="space-y-8">
        <div>
          <h2 className="font-mono text-2xl font-bold text-white">Tech Stack</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
            >
              <h3 className="font-mono text-sm font-bold text-cyan-400">
                {skillGroup.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
