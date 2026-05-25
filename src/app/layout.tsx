import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MatrixRain from '@/components/MatrixRain'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bandi Mohan - Offensive Security Engineer',
  description:
    'Security engineer focused on cloud infrastructure, detection engineering, and AI-assisted security automation.',
  keywords: [
    'security',
    'offensive security',
    'cloud security',
    'detection engineering',
    'AWS',
    'threat intelligence',
  ],
  authors: [{ name: 'Bandi Mohan' }],
  openGraph: {
    title: 'Bandi Mohan - Offensive Security Engineer',
    description:
      'Building cloud security systems, threat detection pipelines, and AI-assisted security automation.',
    type: 'website',
    url: 'https://bandi.dev',
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
