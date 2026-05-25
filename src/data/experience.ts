export interface Experience {
  id: string
  title: string
  company: string
  duration: string
  description: string
  skills: string[]
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'OWASP Chapter Leader',
    company: 'OWASP',
    duration: 'June 2025 — Present',
    description:
      'Led OWASP community by organizing security awareness sessions, hands-on workshops, and discussions on OWASP Top 10. Coordinated chapter activities, managed event planning, and collaborated with security professionals to promote secure development practices.',
    skills: ['OWASP Top 10', 'Security Awareness', 'Community Leadership', 'Training'],
  },
  {
    id: '2',
    title: 'Cybersecurity President',
    company: 'CYSEC | G.I.T.A.M',
    duration: 'Feb 2026 — Present',
    description:
      'Directed cybersecurity awareness initiatives to strengthen the college\'s security posture. Conducting penetration testing, SIEM analysis, and awareness sessions on MITRE ATT&CK using industry-standard tools.',
    skills: ['Penetration Testing', 'SIEM', 'MITRE ATT&CK', 'Leadership'],
  },
  {
    id: '3',
    title: 'Linux Foundation - Internship',
    company: 'The Linux Foundation',
    duration: 'July 2025 — Dec 2025',
    description:
      'Selected as mentee in Linux Foundation\'s Magma Core program. Contributing to open-source mobile core networks through deployment, testing, debugging, and documentation to enhance automation, scalability, and 5G/LTE infrastructure.',
    skills: ['Open Source', 'Magma', '5G/LTE', 'Kubernetes', 'Debugging'],
  },
  {
    id: '4',
    title: 'Security Researcher & Speaker',
    company: 'G.I.T.A.M University',
    duration: 'Sept 2024 — Present',
    description:
      'Presented cybersecurity awareness sessions to students and faculty on vulnerabilities, best practices, and current threats. Delivered security patches and prevention techniques to empower the academic community with proactive security measures.',
    skills: ['Education', 'Technical Speaking', 'Security Awareness', 'Training'],
  },
  {
    id: '5',
    title: 'Bug Bounty Hunter - Security Researcher',
    company: 'HackerOne',
    duration: 'Nov 2023 — Present',
    description:
      'Discovered and responsibly disclosed security vulnerabilities in web applications and open-source systems. Applied OWASP Top 10 methodologies, conducted manual testing and reconnaissance to identify flaws.',
    skills: ['Bug Bounty', 'OWASP Top 10', 'Vulnerability Assessment', 'Web App Pentesting'],
  },
]
