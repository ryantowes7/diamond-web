'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UpdateNews from '@/components/UpdateNews'
import HouseTypes from '@/components/HouseTypes'
import HousingList from '@/components/HousingList'
import Contact from '@/components/Contact'
import GoogleMaps from '@/components/GoogleMaps'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Update Diamond News Section */}
      <UpdateNews />

      {/* House Types Section */}
      <HouseTypes />

      {/* Housing List Section */}
      <HousingList />

      {/* Contact Section */}
      <Contact />

      {/* Google Maps Section */}
      <GoogleMaps />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </main>
  )
}
