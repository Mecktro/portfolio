import React from 'react'
import { socialLinks } from '@/data/socialLinks'

const siteUrl = 'https://mecktro.vercel.app'

function buildJsonLd() {
  const sameAs = socialLinks.map((s) => s.url)

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bandi Mohan',
    url: siteUrl,
    jobTitle: 'Offensive Security Engineer',
    sameAs,
    description:
      'Mecktro — portfolio of Bandi Mohan. Offensive security engineer focused on cloud infrastructure, detection engineering, and AI-assisted security automation.',
  }

  return JSON.stringify(data)
}

export default function Head() {
  const jsonLd = buildJsonLd()

  return (
    <>
      <link rel="canonical" href={`${siteUrl}/`} />
      <meta name="author" content="Bandi Mohan" />
      <meta name="publisher" content="Mecktro" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
