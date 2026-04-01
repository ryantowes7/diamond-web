import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CorporateStatement from '@/components/CorporateStatement'
import Developments from '@/components/Developments'
import VideoShowcase from '@/components/VideoShowcase'
import News from '@/components/News'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Diamond Group - Developer Properti Terpercaya Indonesia',
  description: 'Developer properti nasional dengan 9 kawasan perumahan berkualitas di Jember. Membangun hunian berkelanjutan dengan standar internasional untuk keluarga Indonesia.',
  keywords: 'diamond group, developer properti, perumahan jember, hunian berkualitas, properti nasional, diamond city',
  openGraph: {
    title: 'Diamond Group - Developer Properti Terpercaya Indonesia',
    description: 'Developer properti nasional dengan 9 kawasan perumahan berkualitas di Jember',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CorporateStatement />
      <Developments />
      <VideoShowcase />
      <News />
      <Events />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}