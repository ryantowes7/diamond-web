'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Building2, Filter } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { developments } from '@/data/developments'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProyekPage() {
  const { language } = useLanguage()
  const [selectedType, setSelectedType] = useState('all')
  
  // Helper function to get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }
  
  // Get unique types from developments
  const projectTypes = useMemo(() => {
    const types = [...new Set(developments.map(dev => getText(dev.type)))]
    return ['all', ...types]
  }, [language])

  // Filter developments based on selected type
  const filteredDevelopments = useMemo(() => {
    if (selectedType === 'all') {
      return developments
    }
    return developments.filter(dev => getText(dev.type) === selectedType)
  }, [selectedType, language])

  // Stats data - bilingual
  const statsLabels = {
    totalProjects: { id: 'Total Proyek', en: 'Total Projects' },
    cities: { id: 'Kota', en: 'Cities' },
    unitsBuilt: { id: 'Unit Terbangun', en: 'Units Built' },
    satisfaction: { id: 'Kepuasan Pelanggan', en: 'Customer Satisfaction' }
  }

  const stats = [
    { label: getText(statsLabels.totalProjects), value: '10+', icon: Building2 },
    { label: getText(statsLabels.cities), value: '8+', icon: MapPin },
    { label: getText(statsLabels.unitsBuilt), value: '5.000+', icon: Building2 },
    { label: getText(statsLabels.satisfaction), value: '95%', icon: Building2 },
  ]

  // Localized texts
  const heroSubtitle = language === 'id' 
    ? 'Portofolio Pengembangan'
    : 'Development Portfolio'
  const heroTitle = language === 'id' ? 'Proyek Kami' : 'Our Projects'
  const heroDescription = language === 'id'
    ? 'Menghadirkan kawasan hunian dan komersial berkualitas tinggi di berbagai lokasi strategis Indonesia'
    : 'Delivering high-quality residential and commercial areas in strategic locations across Indonesia'
  const filterTitle = language === 'id' ? 'Filter berdasarkan tipe' : 'Filter by type'
  const allProjectsText = language === 'id' ? 'Semua Proyek' : 'All Projects'
  const sectionTitle = selectedType === 'all' 
    ? (language === 'id' ? 'Semua Proyek Kami' : 'All Our Projects')
    : (language === 'id' ? `Proyek ${selectedType}` : `${selectedType} Projects`)
  const projectsAvailable = language === 'id' 
    ? `${filteredDevelopments.length} proyek tersedia` 
    : `${filteredDevelopments.length} projects available`
  const viewDetailBtn = language === 'id' ? 'Lihat Detail Proyek' : 'View Project Details'
  const ctaTitle = language === 'id' ? 'Tertarik dengan Proyek Kami?' : 'Interested in Our Projects?'
  const ctaDescription = language === 'id'
    ? 'Hubungi tim kami untuk informasi lebih lanjut mengenai proyek-proyek yang tersedia dan dapatkan penawaran terbaik'
    : 'Contact our team for more information about available projects and get the best offers'
  const contactMarketingBtn = language === 'id' ? 'Hubungi Marketing' : 'Contact Marketing'
  const downloadBrochureBtn = language === 'id' ? 'Download Brochure' : 'Download Brochure'

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Diamond Group Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-orange-600/20 backdrop-blur-sm text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                  {heroSubtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
              >
                {heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                {heroDescription}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <Filter className="text-gray-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">
                {filterTitle}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {type === 'all' ? allProjectsText : type}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              {sectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {projectsAvailable}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredDevelopments.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={getText(project.name)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                          FLAGSHIP
                        </span>
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                        {getText(project.type)}
                      </span>
                    </div>

                    {/* Quick Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-white/90 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm font-medium">{getText(project.location)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {getText(project.name)}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 flex-1">
                      {getText(project.description)}
                    </p>
                    
                    <Button
                      onClick={() => window.location.href = `/proyek/${project.id}`}
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl group/btn"
                    >
                      {viewDetailBtn}
                      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={18} />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
              {ctaDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-base lg:text-lg font-medium tracking-wide rounded-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-2xl"
              >
                {contactMarketingBtn}
              </Button>
              <Button
                size="lg"
                className="px-8 py-6 text-base lg:text-lg font-medium tracking-wide rounded-2xl transition-all duration-300 hover:scale-105 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm"
              >
                {downloadBrochureBtn}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}