'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { developments } from '@/data/developments'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Developments() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isMobile, setIsMobile] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef(null)
  const x = useMotionValue(0)

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1.35) // Mobile: 1 card utuh + 35% card berikutnya
        setIsMobile(true)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3) // Tablet: 3 cards
        setIsMobile(false)
      } else {
        setCardsPerView(3) // Desktop: 3 cards
        setIsMobile(false)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Update container width
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [cardsPerView])

  // Calculate card width and gap
  const cardGap = isMobile ? 20 : 24
  const cardWidth = containerWidth / cardsPerView - (cardGap * (cardsPerView - 1) / cardsPerView)
  const maxScroll = -(cardWidth + cardGap) * (developments.length - cardsPerView)

  // Animate to index
  const animateToIndex = (index) => {
    const targetX = -index * (cardWidth + cardGap)
    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    })
    setCurrentIndex(index)
  }

  // Manual navigation
  const handleNext = () => {
    const maxIndex = developments.length - Math.floor(cardsPerView)
    const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
    animateToIndex(nextIndex)
  }

  const handlePrev = () => {
    const maxIndex = developments.length - Math.floor(cardsPerView)
    const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
    animateToIndex(prevIndex)
  }

  const handleDotClick = (index) => {
    animateToIndex(index)
  }

  // Handle drag end - snap to nearest card
  const handleDragEnd = (event, info) => {
    const currentX = x.get()
    const velocity = info.velocity.x
    
    // Calculate which card we're closest to
    let targetIndex = Math.round(-currentX / (cardWidth + cardGap))
    
    // Add velocity-based momentum
    if (Math.abs(velocity) > 500) {
      targetIndex += velocity > 0 ? -1 : 1
    }
    
    // Constrain to valid range
    const maxIndex = developments.length - Math.floor(cardsPerView)
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex))
    
    animateToIndex(targetIndex)
  }

  // Get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = language === 'id' ? 'Proyek Perumahan Kami' : 'Our Residential Projects'
  const sectionDescription = language === 'id' 
    ? '9 kawasan perumahan berkualitas di Jember dengan lokasi strategis untuk hunian dan investasi keluarga Anda.'
    : '9 quality residential areas in Jember with strategic locations for your family living and investment.'

  const totalDots = Math.ceil(developments.length / cardsPerView)
  const activeDotIndex = Math.floor(currentIndex / cardsPerView)

  return (
    <section id="proyek" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header - Centered - Compact Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {sectionDescription}
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Premium Navigation - Top Right: < • • • > */}
          <div className="flex items-center justify-end mb-5 gap-3">
            <button
              onClick={handlePrev}
              className="text-gray-400 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dot Indicators - Interactive */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 ${
                    activeDotIndex === idx
                      ? 'w-2 h-2 bg-orange-600'
                      : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                  } rounded-full`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Cards Carousel - DRAGGABLE */}
          <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              style={{ x }}
              drag="x"
              dragConstraints={{ left: maxScroll, right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              onDragEnd={handleDragEnd}
              className="flex gap-5 lg:gap-6"
            >
              {developments.map((dev, index) => (
                <motion.div
                  key={dev.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ 
                    width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * (isMobile ? 20 : 24) / cardsPerView}px)` 
                  }}
                >
                  {/* Premium Layered Card */}
                  <div className="group cursor-pointer select-none">
                    {/* Image Container - Dominant Height */}
                    <div className="relative h-[280px] overflow-hidden rounded-t-xl">
                      <img
                        src={dev.image}
                        alt={getText(dev.name)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                        draggable="false"
                      />
                      {/* Premium Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                    </div>

                    {/* Content Box - Overlap -30px with Premium Shadow & Border */}
                    <Card className="relative -mt-8 mx-4 bg-white rounded-xl shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
                      <div className="p-5">
                        {/* Orange Accent Line */}
                        <div className="w-12 h-0.5 bg-orange-600 mb-3"></div>

                        {/* Project Name */}
                        <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
                          {getText(dev.name)}
                        </h4>
                        
                        {/* Location - Desktop: tampil di atas */}
                        <div className="hidden md:flex items-center gap-1.5 text-gray-600 mb-3">
                          <MapPin size={14} className="flex-shrink-0 text-orange-600" />
                          <span className="text-xs lg:text-sm">{getText(dev.location)}</span>
                        </div>

                        {/* Short Description - 2 lines */}
                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                          {getText(dev.shortDescription)}
                        </p>

                        {/* Mobile Layout: Location + CTA sejajar */}
                        <div className="flex md:hidden items-center justify-between gap-3">
                          {/* Location - hanya kecamatan */}
                          <div className="flex items-center gap-1.5 text-gray-600 flex-1">
                            <MapPin size={14} className="flex-shrink-0 text-orange-600" />
                            <span className="text-xs">{dev.kecamatan}</span>
                          </div>
                          
                          {/* CTA Icon Only */}
                          <button 
                            onClick={() => {
                              if (dev.id === 'diamond-city') {
                                window.location.href = '/proyek/diamond-city'
                              } else {
                                window.location.href = `/proyek#${dev.id}`
                              }
                            }}
                            className="group/cta text-orange-600 hover:text-orange-700 transition-colors duration-300"
                            aria-label={`Lihat detail ${getText(dev.name)}`}
                          >
                            <ArrowRight 
                              size={18} 
                              className="transition-transform duration-300 group-hover/cta:translate-x-1" 
                            />
                          </button>
                        </div>

                        {/* Desktop CTA - tampil dengan text */}
                        <button 
                          className="hidden md:flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-300 group/cta"
                          aria-label={`Lihat detail ${getText(dev.name)}`}
                        >
                          <span>Lihat Detail</span>
                          <ArrowRight 
                            size={16} 
                            className="transition-transform duration-300 group-hover/cta:translate-x-1" 
                          />
                        </button>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}