export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'OSCP',
    issuer: 'Offensive Security',
    date: 'Pursuing',
  },
  {
    id: '2',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'Expected May 2026',
  },
  {
    id: '3',
    name: 'Certified AppSec Practitioner (SecOps)',
    issuer: 'Secure Code Warrior',
    date: '2024',
  },
  {
    id: '4',
    name: 'Salesforce Agentforce Specialist',
    issuer: 'Salesforce',
    date: '2024',
  },
  {
    id: '5',
    name: 'Google Foundation of Cybersecurity',
    issuer: 'Google',
    date: '2024',
  },
  {
    id: '6',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Expected June 2026',
  },
  {
    id: '7',
    name: 'Magma Program',
    issuer: 'Linux Foundation',
    date: '2025',
  },
]
