const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizePackageImports: ['lucide-react'],
  },
  transpilePackages: ['lucide-react'],
  async headers() {
    return [
      {
        source: '/(.*)',
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
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/(.*\\.jpg|\\.jpeg|\\.png|\\.webp|\\.svg|\\.gif|\\.ico|\\.avif|\\.bmp|\\.tiff|\\.heic|\\.heif|\\.jfif)$/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ]
  },
  compiler: {
    removeConsole: isProduction,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    }
    return config
  },
  images: {
    domains: [
      'images.unsplash.com',
      'pexels.com',
      'cdn.jsdelivr.net',
      'source.unsplash.com',
      'api.a0.dev', // placeholder API
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: isProduction ? 60 * 60 * 24 * 30 : 0, // 30 days in production
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  staticPageGenerationTimeout: 120,
}

module.exports = withBundleAnalyzer(nextConfig)