'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

// New Diamond City Components
import DiamondCityHero from '@/components/projects/diamond-city/DiamondCityHero'
import DiamondCityProfile from '@/components/projects/diamond-city/DiamondCityProfile'
import DiamondCityGallery from '@/components/projects/diamond-city/DiamondCityGallery'
import DiamondCityUnits from '@/components/projects/diamond-city/DiamondCityUnits'
import DiamondCityLocation from '@/components/projects/diamond-city/DiamondCityLocation'
import DiamondCityInfo from '@/components/projects/diamond-city/DiamondCityInfo'
import DiamondCityTools from '@/components/projects/diamond-city/DiamondCityTools'
import ProjectContact from '@/components/projects/shared/ProjectContact'

// Data
import { diamondCityData } from '@/data/projects/diamond-city'
import { diamondCityNews } from '@/data/projects/diamond-city-news'
import { diamondCityEvents } from '@/data/projects/diamond-city-events'
import { useLanguage } from '@/contexts/LanguageContext'
import { contactInfo } from '@/data/contact'

export default function DiamondCityPage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Updated: Location "Patrang, Jember", Button "Hubungi Kami" */}
      <DiamondCityHero 
        data={diamondCityData} 
        language={language}
      />

      {/* Profile Section - Updated: Compact stats mobile (4 horizontal) */}
      <DiamondCityProfile 
        data={diamondCityData} 
        language={language}
      />

      {/* Gallery Section */}
      <DiamondCityGallery 
        data={diamondCityData} 
        language={language}
      />

      {/* Tools & Services Section - Updated: Diamond City specific, 4 tools */}
      <DiamondCityTools 
        language={language}
      />

      {/* Unit Types Section */}
      <DiamondCityUnits 
        data={diamondCityData} 
        language={language}
      />

      {/* Location Section - Updated: Hub-spoke diagram desktop, slider mobile */}
      <DiamondCityLocation 
        data={diamondCityData} 
        language={language}
      />

      {/* Marketing Contact Section - Updated: Prominent office button at top */}
      <ProjectContact 
        data={diamondCityData} 
        language={language}
        officePhone={contactInfo.phone}
      />

      {/* Info & Resources Section - Updated: All cards in carousel */}
      <DiamondCityInfo 
        newsData={diamondCityNews}
        eventsData={diamondCityEvents}
        language={language}
      />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}