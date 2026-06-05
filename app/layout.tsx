import './globals.css'
import LightRay from '@/components/light-ray'
import Navbar from '@/components/navbar'
import LenisProvider from '@/components/lenis-provider'
import { LanguageProvider } from '@/lib/language-context'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { getWebsiteJsonLd } from '@/lib/seo/json-ld'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'Konlyzx',
    template: '%s | Konlyzx',
  },
  description:
    'Fullstack developer based in Colombia — focused on clean interfaces, smooth interactions, and scalable backends.',
  keywords: [
    'Konlyzx',
    'Fullstack Developer',
    'Colombia',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Konlyzx' }],
  creator: 'Konlyzx',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Konlyzx',
    description:
      'Fullstack developer based in Colombia — focused on clean interfaces, smooth interactions, and scalable backends.',
    url: 'https://konlyzx.dev',
    siteName: 'Konlyzx',
    images: [
      { url: 'https://konlyzx.dev/api/og?title=konlyzx.dev', alt: 'Konlyzx' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@konlyzx_',
    creator: '@konlyzx_',
  },
  metadataBase: new URL('https://konlyzx.dev'),
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
  alternates: {
    canonical: 'https://konlyzx.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteJsonLd()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <LanguageProvider>
          <LenisProvider>
            <LightRay />
            <div className="max-w-3xl mx-auto font-[family-name:var(--font-geist-mono)] px-8 md:px-12">
              <Navbar />
              {children}
            </div>
            <Analytics />
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
