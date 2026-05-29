export const honeypotProject = {
  id: 'cloud-threat-telemetry',
  title: 'Cloud Threat Telemetry Pipeline',
  description:
    'End-to-end threat detection system collecting 2,500+ intrusion attempts across AWS infrastructure. Enriched with LLM analysis to identify 30+ linked C2 servers.',
  longDescription: `Built a production-grade AWS honeypot infrastructure that:
  
• Deployed across multiple AWS regions to collect attack telemetry
• Integrated Elasticsearch for real-time threat indexing
• Implemented LLM enrichment pipeline using OpenAI APIs
• Created detection rules mapped to MITRE ATT&CK framework
• Generated threat intelligence reports with C2 analysis
• Built Grafana dashboards for SOC monitoring

Impact: 2,500+ attacks collected, 30+ C2 servers identified, 70% faster incident response`,
  image: '/images/projects/cloud.jpg',
  technologies: [
    'AWS',
    'Python',
    'Elasticsearch',
    'OpenAI',
    'Grafana',
    'Docker',
    'Terraform',
  ],
  link: '#',
  github: 'https://github.com',
  highlights: [
    '2,500+ intrusion attempts',
    '30+ C2 servers identified',
    '70% faster IR time',
    'MITRE ATT&CK mapped',
  ],
}
