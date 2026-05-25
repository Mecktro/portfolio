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
                B.Tech CSE (Cybersecurity) student at G.I.T.A.M University with hands-on experience in cloud security, 
                incident detection, and security automation. Skilled in Python scripting, vulnerability assessment using 
                OWASP Top 10 and MITRE ATT&CK. Currently seeking opportunities in Offensive Security.
              </p>
              <p>
                Leading OWASP community initiatives and CyberSec awareness at G.I.T.A.M. Active in bug bounty hunting, 
                CTF competitions, and contributing to open-source security projects. Focused on building practical security 
                understanding and strengthening security posture through detection engineering and threat modeling.
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
