'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DiamondCityLocation({ data, language = 'id' }) {
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const x = useMotionValue(0)

  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile slider animation
  const animateToIndex = (index) => {
    if (!containerRef.current) return
    const cardWidth = containerRef.current.offsetWidth * 0.85
    const gap = 16
    const targetX = -index * (cardWidth + gap)
    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    })
    setCurrentIndex(index)
  }

  const handleDragEnd = (event, info) => {
    if (!containerRef.current) return
    const cardWidth = containerRef.current.offsetWidth * 0.85
    const gap = 16
    const currentX = x.get()
    const velocity = info.velocity.x
    
    let targetIndex = Math.round(-currentX / (cardWidth + gap))
    
    if (Math.abs(velocity) > 500) {
      targetIndex += velocity > 0 ? -1 : 1
    }
    
    const maxIndex = data.location.nearbyPlaces.length - 1
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex))
    
    animateToIndex(targetIndex)
  }

  return (
    <section id="lokasi" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul langsung tanpa label "LOKASI" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === 'id' ? 'Lokasi & Aksesibilitas' : 'Location & Accessibility'}
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            {getText(data.location.address)}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-300 text-slate-700 hover:bg-slate-100"
            onClick={() => window.open(`https://www.google.com/maps?q=${data.location.coordinates.lat},${data.location.coordinates.lng}`, '_blank')}
          >
            <Navigation size={16} className="mr-2" />
            {language === 'id' ? 'Buka di Google Maps' : 'Open in Google Maps'}
          </Button>
        </motion.div>

        {/* Desktop: Hub-Spoke Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block mb-12"
        >
          <div className="max-w-5xl mx-auto">
            {/* Hub-Spoke Layout */}
            <div className="relative py-12">
              {/* Central Hub - Diamond City */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg mb-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-center bg-slate-50 px-2">
                    <div className="font-bold text-slate-900 text-lg whitespace-nowrap">DIAMOND CITY</div>
                  </div>
                </div>
              </div>

              {/* Vertical Line from Hub to Horizontal Line */}
              <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-slate-300 -translate-x-1/2 z-10"></div>

              {/* Horizontal Line - dimulai dari bawah vertical line */}
              <div className="absolute top-32 left-0 right-0 h-0.5 bg-slate-300 z-10"></div>

              {/* Location Branches */}
              <div className="relative pt-36">
                <div className="grid grid-cols-6 gap-4">
                  {data.location.nearbyPlaces.map((place, idx) => (
                    <div key={idx} className="relative">
                      {/* Vertical connector line */}
                      <div className="absolute bottom-full left-1/2 w-0.5 h-8 bg-slate-300 -translate-x-1/2"></div>
                      
                      {/* Location info */}
                      <div className="text-center space-y-1">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-1">
                          <MapPin className="text-orange-600" size={18} />
                        </div>
                        <div className="text-sm font-semibold text-slate-900 leading-tight">{getText(place.name)}</div>
                        <div className="text-xs text-slate-600">{getText(place.time)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile: Horizontal Slider */}
        <div ref={containerRef} className="md:hidden mb-12 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ 
              left: -(data.location.nearbyPlaces.length - 1) * (containerRef.current?.offsetWidth * 0.85 + 16 || 0), 
              right: 0 
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            onDragEnd={handleDragEnd}
            className="flex gap-4"
          >
            {data.location.nearbyPlaces.map((place, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 select-none"
                style={{ width: '85%' }}
              >
                <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-orange-600" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-1 text-base">{getText(place.name)}</h4>
                      <p className="text-sm text-slate-600">
                        {place.distance} • {getText(place.time)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Mobile hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-slate-400 mt-4"
          >
            {language === 'id' ? 'Geser untuk melihat lebih banyak →' : 'Swipe to see more →'}
          </motion.p>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={data.location.mapEmbed}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title={language === 'id' ? 'Peta Lokasi Diamond City' : 'Diamond City Location Map'}
          />
        </motion.div>
      </div>
    </section>
  )
}