import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MatrixRain from '@/components/MatrixRain'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mecktro — Bandi Mohan — Offensive Security Engineer',
  description:
    "Mecktro — portfolio of Bandi Mohan. Offensive security engineer focused on cloud infrastructure, detection engineering, and AI-assisted security automation.",
  keywords: [
    'Mecktro',
    'mectro',
    'bandi mohan',
    'mohan bandi',
    'portfolio',
    'security',
    'offensive security',
    'cloud security',
    'detection engineering',
    'threat intelligence',
  ],
  authors: [{ name: 'Bandi Mohan' }],
  metadataBase: new URL('https://mecktro.vercel.app'),
  openGraph: {
    title: 'Mecktro — Bandi Mohan',
    description:
      'Mecktro — portfolio of Bandi Mohan. Building cloud security systems, threat detection pipelines, and AI-assisted security automation.',
    type: 'website',
    url: 'https://mecktro.vercel.app',
    siteName: 'Mecktro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecktro — Bandi Mohan',
    description:
      'Portfolio of Bandi Mohan — offensive security engineer focused on cloud and detection engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <MatrixRain />
        {children}
      </body>
    </html>
  )
}
