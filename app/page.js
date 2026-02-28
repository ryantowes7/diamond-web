import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CorporateStatement from '@/components/CorporateStatement'
import Developments from '@/components/Developments'
import Awards from '@/components/Awards'
import News from '@/components/News'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Diamond Group - Developer Properti Terpercaya Indonesia',
  description: 'Developer properti nasional dengan 12+ kawasan perumahan berkualitas. Membangun hunian berkelanjutan dengan standar internasional untuk keluarga Indonesia.',
  keywords: 'diamond group, developer properti, perumahan indonesia, hunian berkualitas, properti nasional, diamond city',
  openGraph: {
    title: 'Diamond Group - Developer Properti Terpercaya Indonesia',
    description: 'Developer properti nasional dengan 12+ kawasan perumahan berkualitas',
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
      <Awards />
      <News />
      <Events />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
