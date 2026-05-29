export const cdipProject = {
  id: 'cdip-cyber-defense-intelligence-platform',
  title: 'CDIP — Cyber Defense Intelligence Platform',
  description:
    'Simulated enterprise-grade cybersecurity platform with red team attack simulation, SOC detection, cloud monitoring, container runtime security, and automated incident response reporting.',
  longDescription: `Designed as a security engineering platform that models real-world adversary behavior and SOC telemetry.

• Red Team attack simulation engine for adversary emulation
• SOC detection engine with log parsing, alerting, and rule management
• Cloud security monitoring for IAM, misconfigurations, and compliance
• Container runtime security with Dockerfile and runtime observability
• Automated incident response reporting with templated output
• Shared utilities, schemas, and configuration across security components
• Documentation and generated reports for playbooks, compliance, and analysis

Frameworks and mappings:
• MITRE ATT&CK techniques
• CIS AWS Benchmark
• AWS Well-Architected Security Pillar
• NIST Cybersecurity Framework`,
  technologies: [
    'Python',
    'Docker',
    'Kubernetes',
    'Cloud Security',
    'SIEM',
    'MITRE ATT&CK',
    'Terraform',
    'AWS',
  ],
  image: '/images/projects/CDIP.jpg',
  link: 'https://github.com/Mecktro/CDIP',
  github: 'https://github.com/Mecktro/CDIP',
  highlights: [
    'Enterprise-grade red team simulation',
    'SOC detection and alert pipeline',
    'Cloud security and compliance monitoring',
    'Container runtime threat visibility',
    'Automated incident response reports',
  ],
}
