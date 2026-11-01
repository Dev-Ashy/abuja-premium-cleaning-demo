import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cleaning-service-website.vercel.app'),
  title: {
    default: 'Premium Cleaning Services Abuja | Residential & Commercial Cleaning',
    template: '%s | Premium Cleaning Services Abuja',
  },
  description:
    'Premium residential & commercial cleaning services in Abuja, Nigeria. Certified cleaners, eco-friendly products, 24/7 customer support. Book your free quote today!',
  keywords:
    'cleaning services Abuja, residential cleaning Abuja, commercial cleaning Abuja, house cleaning Abuja, office cleaning Abuja, maid service Abuja, cleaning company Abuja',
  authors: [{ name: 'Premium Cleaning Services Abuja' }],
  creator: 'Premium Cleaning Services Abuja',
  publisher: 'Premium Cleaning Services Abuja',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://cleaning-service-website.vercel.app',
    siteName: 'Premium Cleaning Services Abuja',
    title: 'Premium Cleaning Services Abuja',
    description:
      'Premium residential & commercial cleaning services in Abuja, Nigeria. Certified cleaners, eco-friendly products, 24/7 customer support. Book your free quote today!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Cleaning Services Abuja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Cleaning Services Abuja',
    description:
      'Premium residential & commercial cleaning services in Abuja, Nigeria. Certified cleaners, eco-friendly products, 24/7 customer support. Book your free quote today!',
    images: ['/twitter-image.jpg'],
    creator: '@cleaningabuja',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        style={{ colorScheme: 'light dark' }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}