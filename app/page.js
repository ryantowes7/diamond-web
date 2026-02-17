'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HouseTypesCarousel from '@/components/HouseTypesCarousel';
import HousingList from '@/components/HousingList';
import ContactSection from '@/components/ContactSection';
import GoogleMaps from '@/components/GoogleMaps';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HouseTypesCarousel />
      <HousingList />
      <ContactSection />
      <GoogleMaps />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}