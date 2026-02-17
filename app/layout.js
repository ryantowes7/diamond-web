import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Diamond Group - Developer Properti Terpercaya',
  description: 'Developer properti terpercaya dengan 10+ perumahan berkualitas tinggi di berbagai lokasi strategis. Membangun hunian impian, mewujudkan masa depan gemilang.',
  keywords: 'diamond group, developer properti, perumahan, rumah, properti, jakarta, indonesia',
  authors: [{ name: 'Diamond Group' }],
  openGraph: {
    title: 'Diamond Group - Developer Properti Terpercaya',
    description: 'Developer properti terpercaya dengan 10+ perumahan berkualitas tinggi di berbagai lokasi strategis',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}