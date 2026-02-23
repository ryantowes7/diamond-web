import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import CompanyOverview from '@/components/about/CompanyOverview'
import VisionMission from '@/components/about/VisionMission'
import CoreValues from '@/components/about/CoreValues'
import CompanyHistory from '@/components/about/CompanyHistory'
import Awards from '@/components/about/Awards'
import Commitment from '@/components/about/Commitment'

import {
  aboutHero,
  companyOverview,
  visionMission,
  coreValues,
  companyHistory,
  awards,
  commitment
} from '@/data/about'

export const metadata = {
  title: 'Tentang Kami - Diamond Group | Developer Properti Terpercaya',
  description: 'Diamond Group adalah developer properti nasional yang berkomitmen menghadirkan kawasan hunian berkualitas tinggi dengan standar internasional. Ketahui visi, misi, dan nilai-nilai kami.',
  keywords: 'tentang diamond group, visi misi, nilai perusahaan, sejarah diamond group, developer properti indonesia',
  openGraph: {
    title: 'Tentang Kami - Diamond Group',
    description: 'Developer properti terpercaya dengan komitmen pada kualitas dan keberlanjutan',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function TentangKami() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero data={aboutHero} />
      <CompanyOverview data={companyOverview} />
      <VisionMission data={visionMission} />
      <CoreValues values={coreValues} />
      <CompanyHistory data={companyHistory} />
      <Awards data={awards} />
      <Commitment data={commitment} />
      <Footer />
    </main>
  )
}