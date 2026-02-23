'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { developments } from '@/data/developments'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Developments() {
  const { language } = useLanguage()
  const featured = developments.find(dev => dev.featured)
  const others = developments.filter(dev => !dev.featured)
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const carouselRef = useRef(null)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, others.length - cardsPerView)

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  // Get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = language === 'id' ? 'Proyek Unggulan' : 'Featured Projects'
  const sectionSubtitle = language === 'id' 
    ? 'Kawasan hunian dan komersial berkualitas di berbagai lokasi strategis'
    : 'Quality residential and commercial areas in strategic locations'
  const otherProjectsTitle = language === 'id' ? 'Proyek Lainnya' : 'Other Projects'
  const viewDetailText = language === 'id' ? 'Lihat Detail' : 'View Details'
  const flagshipBadge = language === 'id' ? 'FLAGSHIP PROJECT' : 'FLAGSHIP PROJECT'

  return (
    <section id="proyek" className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Featured Development - Full Screen with Right Center Blur Overlay */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <Card className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 border-0">
              <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
                {/* Full Screen Image/Video - Remains Clear */}
                <img
                  src={featured.image}
                  alt={getText(featured.name)}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Featured Badge - Top Left */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                    {flagshipBadge}
                  </span>
                </div>

                {/* Content Overlay - Right Center with Subtle Blur Gradient */}
                <div className="absolute inset-y-0 right-0 flex items-center z-10 w-full lg:w-2/5 xl:w-1/3">
                  {/* Smooth Blur Gradient Background - No Hard Edges */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/60 to-transparent backdrop-blur-[2px]" 
                       style={{
                         maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 100%)',
                         WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 100%)'
                       }} 
                  />
                  
                  {/* Compact Content Container */}
                  <div className="relative px-6 lg:px-8 xl:px-10 py-8 ml-auto max-w-md">
                    {/* Location */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 text-orange-400 mb-3"
                    >
                      <MapPin size={18} />
                      <span className="text-sm font-medium tracking-wide">{getText(featured.location)}</span>
                    </motion.div>
                    
                    {/* Project Name */}
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg"
                    >
                      {getText(featured.name)}
                    </motion.h3>
                    
                    {/* Type Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="mb-4"
                    >
                      <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30">
                        {getText(featured.type)}
                      </span>
                    </motion.div>
                    
                    {/* Description - Compact */}
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="text-white/95 text-sm lg:text-base leading-relaxed mb-6 drop-shadow-md line-clamp-4"
                    >
                      {getText(featured.description)}
                    </motion.p>
                    
                    {/* CTA Button - Compact */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <Button
                        size="default"
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl px-6 py-5 text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group/btn w-full"
                      >
                        {viewDetailText}
                        <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={18} />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Developments Carousel */}
        <div className="relative">
          {/* Carousel Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
              {otherProjectsTitle}
            </h3>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2.5 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:bg-white transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="text-gray-700" size={20} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="p-2.5 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:bg-white transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight className="text-gray-700" size={20} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              animate={{ x: `${-currentIndex * (100 / cardsPerView)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex gap-5"
            >
              {others.map((dev, index) => (
                <motion.div
                  key={dev.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 20 / cardsPerView}px)` }}
                >
                  <Card className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={dev.image}
                        alt={getText(dev.name)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {getText(dev.type)}
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-1.5 text-white/90 mb-1.5">
                          <MapPin size={14} />
                          <span className="text-xs">{getText(dev.location)}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {getText(dev.name)}
                        </h4>
                        <button className="inline-flex items-center gap-1.5 text-white text-xs font-medium hover:gap-2.5 transition-all duration-300">
                          {viewDetailText}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}