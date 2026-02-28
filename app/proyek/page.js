'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, Building2, Home, TrendingUp, Users, Star, Calculator, Eye, Phone, MessageSquare, Mail, Clock, Award, Briefcase, GitCompare, Video, Sparkles, Tag, Percent, Gift } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { developments, getFeaturedProject } from '@/data/developments'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProyekPage() {
  const { language } = useLanguage()
  
  // Helper function to get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }
  
  const featuredProject = getFeaturedProject()

  // Get latest 3 projects (newest launches)
  const latestProjects = developments.slice(0, 3)

  // Stats calculation
  const totalProjects = developments.length
  const totalUnitsSold = developments.reduce((sum, dev) => sum + dev.unitsSold, 0)

  // Dummy data for marketing team
  const marketingTeam = [
    {
      name: 'Budi Santoso',
      role: language === 'id' ? 'Manager Marketing' : 'Marketing Manager',
      phone: '+62 812-3456-7890',
      email: 'budi.santoso@diamondgroup.id',
      projects: ['Diamond City', 'Rinjani Village'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      specialty: language === 'id' ? 'Spesialis Perumahan Premium' : 'Premium Housing Specialist'
    },
    {
      name: 'Siti Nurhaliza',
      role: language === 'id' ? 'Senior Marketing Executive' : 'Senior Marketing Executive',
      phone: '+62 813-4567-8901',
      email: 'siti.nurhaliza@diamondgroup.id',
      projects: ['Kampus Village', 'The Kayana'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      specialty: language === 'id' ? 'Spesialis Investasi Properti' : 'Property Investment Specialist'
    },
    {
      name: 'Ahmad Fauzi',
      role: language === 'id' ? 'Marketing Executive' : 'Marketing Executive',
      phone: '+62 814-5678-9012',
      email: 'ahmad.fauzi@diamondgroup.id',
      projects: ['Green Hill Boulevard', 'Rajawali Residence'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      specialty: language === 'id' ? 'Spesialis KPR & Pembiayaan' : 'KPR & Financing Specialist'
    },
    {
      name: 'Dewi Kartika',
      role: language === 'id' ? 'Marketing Executive' : 'Marketing Executive',
      phone: '+62 815-6789-0123',
      email: 'dewi.kartika@diamondgroup.id',
      projects: ['Gumuk Mas Permai', 'Grand Permata Ajung'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      specialty: language === 'id' ? 'Spesialis Rumah Subsidi' : 'Subsidized Housing Specialist'
    }
  ]

  // Dummy articles/updates
  const articles = [
    {
      id: 1,
      title: language === 'id' ? 'Grand Opening Diamond City - Kawasan Terlengkap di Jember' : 'Grand Opening Diamond City - Most Complete Area in Jember',
      excerpt: language === 'id' 
        ? 'Diamond City resmi dibuka dengan konsep mixed-use development. Dapatkan promo spesial DP 5% dan cicilan ringan.'
        : 'Diamond City officially opened with mixed-use development concept. Get special 5% DP promo and light installments.',
      date: '15 Februari 2025',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
      category: language === 'id' ? 'Berita' : 'News'
    },
    {
      id: 2,
      title: language === 'id' ? 'Tips Memilih Rumah Idaman untuk Keluarga Muda' : 'Tips for Choosing Your Dream Home for Young Families',
      excerpt: language === 'id'
        ? 'Panduan lengkap memilih hunian yang tepat dengan pertimbangan lokasi, fasilitas, dan budget yang sesuai.'
        : 'Complete guide to choosing the right home considering location, facilities, and suitable budget.',
      date: '10 Februari 2025',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      category: language === 'id' ? 'Artikel' : 'Article'
    },
    {
      id: 3,
      title: language === 'id' ? 'Promo KPR Spesial - Bunga Rendah hingga 20 Tahun' : 'Special KPR Promo - Low Interest up to 20 Years',
      excerpt: language === 'id'
        ? 'Manfaatkan promo KPR dengan bunga rendah dan cicilan ringan untuk semua proyek Diamond Group.'
        : 'Take advantage of KPR promos with low interest and light installments for all Diamond Group projects.',
      date: '5 Februari 2025',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=500&fit=crop',
      category: language === 'id' ? 'Promo' : 'Promo'
    }
  ]

  // Localized texts
  const texts = {
    heroTitle: language === 'id' ? 'Temukan Hunian Impian Anda' : 'Find Your Dream Home',
    heroSubtitle: language === 'id' ? 'Berbagai pilihan hunian berkualitas dengan lokasi strategis di Jember' : 'Various quality housing options with strategic locations in Jember',
    toolsTitle: language === 'id' ? 'Tools & Layanan' : 'Tools & Services',
    compare: language === 'id' ? 'Bandingkan' : 'Compare',
    kprCalc: language === 'id' ? 'Kalkulator KPR' : 'KPR Calculator',
    virtualTour: language === 'id' ? 'Virtual Tour' : 'Virtual Tour',
    contactAgent: language === 'id' ? 'Hubungi Agen' : 'Contact Agent',
    aerialView: language === 'id' ? 'Aerial View' : 'Aerial View',
    statsLabels: {
      totalProjects: language === 'id' ? 'Total Proyek' : 'Total Projects',
      kecamatan: language === 'id' ? 'Lokasi' : 'Locations',
      unitsSold: language === 'id' ? 'Unit Terjual' : 'Units Sold',
      satisfaction: language === 'id' ? 'Kepuasan Pelanggan' : 'Customer Satisfaction'
    },
    promoTitle: language === 'id' ? 'Promo Spesial Bulan Ini' : 'Special Promo This Month',
    promoSubtitle: language === 'id' ? 'Dapatkan penawaran terbaik untuk hunian impian Anda' : 'Get the best deals for your dream home',
    latestLaunches: language === 'id' ? 'Launching Terbaru' : 'Latest Launches',
    latestLaunchesDesc: language === 'id' ? 'Proyek terbaru dengan konsep modern dan fasilitas lengkap' : 'Latest projects with modern concepts and complete facilities',
    exploreProjects: language === 'id' ? 'Jelajahi Semua Proyek' : 'Explore All Projects',
    exploreProjectsDesc: language === 'id' ? 'Diamond Group menghadirkan berbagai pilihan hunian berkualitas di seluruh Jember' : 'Diamond Group presents various quality housing options throughout Jember',
    marketingTeamTitle: language === 'id' ? 'Tim Marketing Profesional' : 'Professional Marketing Team',
    marketingTeamDesc: language === 'id' ? 'Hubungi tim marketing kami untuk konsultasi dan penawaran terbaik' : 'Contact our marketing team for consultation and best offers',
    articlesTitle: language === 'id' ? 'Berita & Artikel Terbaru' : 'Latest News & Articles',
    articlesDesc: language === 'id' ? 'Informasi terkini seputar properti dan promo Diamond Group' : 'Latest information about properties and Diamond Group promos',
    exploreMore: language === 'id' ? 'Lihat Detail' : 'View Details',
    readMore: language === 'id' ? 'Baca Selengkapnya' : 'Read More',
    contactNow: language === 'id' ? 'Hubungi Sekarang' : 'Contact Now',
    startingFrom: language === 'id' ? 'Mulai dari' : 'Starting from',
    unitsSoldLabel: language === 'id' ? 'unit terjual' : 'units sold',
    newLaunch: language === 'id' ? 'BARU' : 'NEW'
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Enhanced with better design */}
      <section className="relative h-[600px] bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-500/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-6">
              <Sparkles size={18} />
              <span className="text-sm font-bold">{language === 'id' ? 'Developer Properti Terpercaya' : 'Trusted Property Developer'}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {texts.heroTitle}
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
              {texts.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-xl bg-white text-orange-600 hover:bg-gray-100 shadow-xl"
              >
                <Phone className="mr-2" size={20} />
                {language === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Video className="mr-2" size={20} />
                Virtual Tour
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Promo Banner Section */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
                  <Gift size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">{texts.promoTitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {language === 'id' ? 'DP 5% + Cicilan Ringan' : '5% DP + Light Installments'}
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  {texts.promoSubtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  <Tag className="mr-2" size={20} />
                  {language === 'id' ? 'Lihat Promo' : 'View Promo'}
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <Percent className="text-white mb-3" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">5%</div>
                  <div className="text-white/90 text-sm">DP Ringan</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <Clock className="text-white mb-3" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">20</div>
                  <div className="text-white/90 text-sm">{language === 'id' ? 'Tahun Tenor' : 'Years Tenor'}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Tools Section - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{texts.toolsTitle}</h2>
            <p className="text-gray-600">{language === 'id' ? 'Fitur untuk membantu Anda menemukan hunian ideal' : 'Features to help you find your ideal home'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { icon: GitCompare, label: texts.compare, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
              { icon: Calculator, label: texts.kprCalc, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
              { icon: Video, label: texts.virtualTour, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
              { icon: Phone, label: texts.contactAgent, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50' },
              { icon: Eye, label: texts.aerialView, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50' }
            ].map((tool, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group ${tool.bgColor} hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <tool.icon className="text-white" size={28} />
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {tool.label}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Launches Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
              <Sparkles size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">{texts.latestLaunches}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'Proyek Terbaru Kami' : 'Our Latest Projects'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {texts.latestLaunchesDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border border-gray-100">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={getText(project.name)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1.5 px-3 py-2 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <Star size={14} className="fill-white" />
                        {texts.newLaunch}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-start gap-2 text-white/90 mb-2">
                        <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{getText(project.location)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {getText(project.name)}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                      {getText(project.description)}
                    </p>
                    
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center justify-between text-sm bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
                        <span className="text-gray-600 font-medium">{texts.startingFrom}</span>
                        <span className="font-bold text-orange-600 text-base">{getText(project.priceRange.display).split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <TrendingUp size={16} className="text-green-600" />
                        <span className="font-semibold">{project.unitsSold} {texts.unitsSoldLabel}</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => window.location.href = `/proyek#${project.id}`}
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl py-6 font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                      {texts.exploreMore}
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore All Projects Section - Compact like Sinar Mas Land */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {texts.exploreProjects}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {texts.exploreProjectsDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {developments.map((project, index) => (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={getText(project.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <Star size={12} className="fill-white" />
                        FLAGSHIP
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full mb-2">
                      {getText(project.type)}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {getText(project.name)}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-gray-600 mb-3">
                    <MapPin size={14} className="text-orange-600 flex-shrink-0" />
                    <span className="text-xs font-medium line-clamp-1">{getText(project.location)}</span>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 mb-3 border border-orange-100">
                    <div className="text-xs text-gray-600 mb-1">{texts.startingFrom}</div>
                    <div className="font-bold text-orange-600 text-sm">{getText(project.priceRange.display).split(' - ')[0]}</div>
                  </div>

                  <Button
                    onClick={() => window.location.href = `/proyek#${project.id}`}
                    size="sm"
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-lg py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
                  >
                    {texts.exploreMore}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Team Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
              <Briefcase size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">{texts.marketingTeamTitle}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {texts.marketingTeamTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {texts.marketingTeamDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-white/90 font-medium mb-2">{member.role}</p>
                      <div className="flex items-center gap-1.5 text-orange-400 text-xs">
                        <Award size={14} />
                        <span>{member.specialty}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="space-y-2 mb-4">
                      <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                        <Phone size={14} className="text-green-600 flex-shrink-0" />
                        <span className="font-medium">{member.phone}</span>
                      </a>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                        <Mail size={14} className="text-blue-600 flex-shrink-0" />
                        <span className="font-medium text-xs">{member.email}</span>
                      </a>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">{language === 'id' ? 'Proyek' : 'Projects'}:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.projects.map((project, idx) => (
                          <span key={idx} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-lg border border-orange-100">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => window.location.href = `https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
                      size="sm"
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
                    >
                      <MessageSquare className="mr-2" size={16} />
                      WhatsApp
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Updates Section - Clean Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
              <Award size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">{texts.articlesTitle}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {texts.articlesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {texts.articlesDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col bg-white border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Clock size={14} />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg py-2 text-sm font-semibold transition-all"
                    >
                      {texts.readMore}
                      <ArrowRight className="ml-2" size={14} />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-black relative overflow-hidden">
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {language === 'id' ? 'Siap Memiliki Hunian Impian?' : 'Ready to Own Your Dream Home?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {language === 'id' 
                ? 'Hubungi tim marketing kami sekarang untuk konsultasi gratis, jadwal kunjungan, dan penawaran spesial'
                : 'Contact our marketing team now for free consultation, visit schedules, and special offers'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = '/kontak'}
                className="px-10 py-7 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-2xl"
              >
                <Phone className="mr-2" size={22} />
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </Button>
              <Button
                size="lg"
                className="px-10 py-7 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm"
              >
                <MessageSquare className="mr-2" size={22} />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}