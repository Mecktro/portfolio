import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'
import Terminal from '@/components/Terminal'
import { skills } from '@/data/skills'
import SkillGrid from '@/components/SkillGrid'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="border-t border-zinc-800 bg-black py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-6">
            <h2 className="font-mono text-2xl font-bold text-white">
              About
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Final-year B.Tech Cybersecurity student at GITAM University who enjoys breaking things ethically and then figuring out how
                to secure them properly. I work across cloud security, SOC operations, detection engineering, and security automation with
                hands-on experience in Python, AWS, Linux, Docker, and monitoring tools. Most of my time goes into analysing threats,
                building security workflows, and convincing systems not to crash at 2 AM.
              </p>
              <p>
                I currently lead OWASP and cybersecurity community initiatives at GITAM University, where I organise workshops,
                technical sessions, and hands-on security events for students. Outside academics, I actively participate in CTFs,
                open-source security projects, and application security research. I’m especially interested in blue team operations, cloud
                security, DevSecOps, and enterprise security engineering.
              </p>
              <p>
                I like building practical projects that combine monitoring, automation, and security operations — basically making dashboards
                look scary enough for attackers and useful enough for defenders. When I’m not debugging logs or chasing vulnerabilities,
                I’m probably exploring new security tools, contributing to community projects, or explaining cybersecurity concepts with way
                too much enthusiasm.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="border-t border-zinc-800 bg-black">
          <Timeline />
        </section>

        {/* Skills & Tech Stack */}
        <section className="border-t border-zinc-800 bg-black">
          <SkillGrid skills={skills} />
        </section>

        {/* Terminal Skills */}
        <section className="border-t border-zinc-800 bg-black">
          <Terminal />
        </section>
      </main>
      <Footer />
    </>
  )
}
