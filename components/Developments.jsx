'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { developments } from '@/data/developments'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Developments() {
  const featured = developments.find(dev => dev.featured)
  const others = developments.filter(dev => !dev.featured)
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const carouselRef = useRef(null)

  // Responsive cards per view
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

  return (
    <section id="proyek" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Proyek Unggulan
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Kawasan hunian dan komersial berkualitas di berbagai lokasi strategis
          </p>
        </motion.div>

        {/* Featured Development */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <Card className="group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-3 relative h-80 lg:h-[600px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                      FLAGSHIP PROJECT
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-orange-600 mb-4">
                    <MapPin size={20} />
                    <span className="text-sm font-medium tracking-wide">{featured.location}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {featured.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      {featured.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                    {featured.description}
                  </p>
                  
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl px-8 group/btn"
                  >
                    Lihat Detail Proyek
                    <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Developments Carousel */}
        <div className="relative">
          {/* Carousel Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Proyek Lainnya
            </h3>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:bg-white transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="text-gray-700" size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:bg-white transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight className="text-gray-700" size={24} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              animate={{ x: `${-currentIndex * (100 / cardsPerView)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex gap-6"
            >
              {others.map((dev, index) => (
                <motion.div
                  key={dev.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)` }}
                >
                  <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={dev.image}
                        alt={dev.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {dev.type}
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-white/90 mb-2">
                          <MapPin size={16} />
                          <span className="text-sm">{dev.location}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          {dev.name}
                        </h4>
                        <button className="inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all duration-300">
                          Lihat Detail
                          <ArrowRight size={16} />
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