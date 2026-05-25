export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: [
      'Python',
      'Go',
      'JavaScript',
      'C',
      'Bash',
    ],
  },
  {
    category: 'Offensive Security',
    items: [
      'Web Application Penetration Testing',
      'API Security Testing',
      'Vulnerability Assessment',
      'Threat Modeling',
      'OWASP Top 10',
      'MITRE ATT&CK',
      'Bug Bounty Hunting',
    ],
  },
  {
    category: 'Security Tools',
    items: [
      'Burp Suite',
      'Nmap',
      'Metasploit',
      'Wireshark',
      'Nessus',
      'Hydra',
      'John the Ripper',
      'Postman',
      'Shodan',
      'FFuF',
      'nuclei',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'Linux',
      'REST APIs',
      'TCP/IP',
      'HTTP',
      'DNS',
    ],
  },
  {
    category: 'Security Domains',
    items: [
      'Cloud Security',
      'IAM Security',
      'AI/LLM Security',
      'Network Security',
      'Secure Coding',
    ],
  },
  {
    category: 'Other',
    items: [
      'CTFs',
      'Security Automation',
      'Scripting',
      'Git',
    ],
  },
]
