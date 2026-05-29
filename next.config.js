/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Headers for security and performance
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirects
  redirects: async () => {
    return [
      // Redirect old blog URLs if migrating
      // {
      //   source: '/blog/:slug',
      //   destination: '/research/:slug',
      //   permanent: true,
      // },
    ]
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.vercel.app',
  },

  // Experimental features for better performance
  experimental: {
    // Disabled due to Next.js dev-mode issues with lucide-react vendor chunk loading.
    // optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
