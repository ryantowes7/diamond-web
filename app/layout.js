import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Diamond Group - Developer Properti Terpercaya',
  description: 'Diamond Group adalah developer properti terpercaya dengan 9+ perumahan berkualitas premium di lokasi strategis untuk keluarga Indonesia.',
  keywords: 'diamond group, properti, perumahan, rumah, developer, jember, hunian premium',
  authors: [{ name: 'Diamond Group' }],
  creator: 'Diamond Group',
  publisher: 'Diamond Group',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://diamondgroup.co.id'),
  openGraph: {
    title: 'Diamond Group - Developer Properti Terpercaya',
    description: 'Developer properti terpercaya dengan 9+ perumahan berkualitas premium di lokasi strategis.',
    url: '/',
    siteName: 'Diamond Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diamond Group',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Group - Developer Properti Terpercaya',
    description: 'Developer properti terpercaya dengan 9+ perumahan berkualitas premium.',
    images: ['/og-image.jpg'],
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

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
