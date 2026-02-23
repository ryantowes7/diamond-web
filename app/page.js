import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import News from '@/components/News'
import CorporateStatement from '@/components/CorporateStatement'
import Developments from '@/components/Developments'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
      <News />
      <CorporateStatement />
      <Developments />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}