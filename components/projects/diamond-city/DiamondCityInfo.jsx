'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Calendar, MapPin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Format date helper
const formatDate = (dateString, locale = 'id') => {
  const date = new Date(dateString)
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth()
  
  const monthsID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des']
  const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const monthName = locale === 'id' ? monthsID[month] : monthsEN[month]
  
  return `${day} ${monthName} ${year}`
}

export default function DiamondCityInfo({ newsData = [], eventsData = [], language = 'id' }) {
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isMobile, setIsMobile] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const x = useMotionValue(0)

  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  // Combine news and events, limit to 6 items total
  const allInfo = [
    ...newsData.slice(0, 3).map(item => ({ ...item, itemType: 'news' })),
    ...eventsData.slice(0, 3).map(item => ({ ...item, itemType: 'event' }))
  ].slice(0, 6)

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1.35)
        setIsMobile(true)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
        setIsMobile(false)
      } else {
        // Desktop: show 3 cards in carousel
        setCardsPerView(3)
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
  const maxScroll = -(cardWidth + cardGap) * (allInfo.length - cardsPerView)

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

  // Handle drag end
  const handleDragEnd = (event, info) => {
    const currentX = x.get()
    const velocity = info.velocity.x
    
    let targetIndex = Math.round(-currentX / (cardWidth + cardGap))
    
    if (Math.abs(velocity) > 500) {
      targetIndex += velocity > 0 ? -1 : 1
    }
    
    const maxIndex = allInfo.length - Math.floor(cardsPerView)
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex))
    
    animateToIndex(targetIndex)
  }

  // Handle download brochure
  const handleDownloadBrochure = () => {
    // Placeholder - bisa link ke PDF atau form
    alert(language === 'id' 
      ? 'Fitur download brosur akan segera tersedia!' 
      : 'Brochure download feature coming soon!')
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul langsung tanpa label "INFORMASI" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === 'id' ? 'Informasi Terkini' : 'Latest Information'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            {language === 'id'
              ? 'Berita, event, dan aktivitas terbaru Diamond City'
              : 'Latest news, events, and activities from Diamond City'}
          </p>

          {/* Download Brochure Button - Terpisah di bawah judul */}
          <Button
            onClick={handleDownloadBrochure}
            size="lg"
            className="px-8 py-6 text-base font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="mr-2" size={20} />
            {language === 'id' ? 'Download Brosur' : 'Download Brochure'}
          </Button>
        </motion.div>

        {/* Info Cards - Semua dalam Carousel */}
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
            {allInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 select-none"
                style={{ 
                  width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * (isMobile ? 20 : 24) / cardsPerView}px)` 
                }}
              >
                {/* Info Card */}
                <div className="group cursor-pointer h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-[280px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <img
                      src={item.image}
                      alt={getText(item.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Type/Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 text-white text-xs font-medium rounded-md shadow-md ${
                        item.itemType === 'event' 
                          ? 'bg-green-600' 
                          : 'bg-blue-600'
                      }`}>
                        {item.itemType === 'event' 
                          ? getText(item.type)
                          : getText(item.category)
                        }
                      </span>
                    </div>

                    {/* Status Badge (for events) */}
                    {item.itemType === 'event' && (
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-normal rounded-md shadow-sm">
                          {item.status === 'ongoing' 
                            ? (language === 'id' ? 'Sedang Berlangsung' : 'Ongoing')
                            : (language === 'id' ? 'Akan Datang' : 'Upcoming')
                          }
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Below */}
                  <div className="mt-3 space-y-2 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-base lg:text-lg font-medium text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                      {getText(item.title)}
                    </h3>

                    {/* Description/Excerpt */}
                    <p className="text-xs lg:text-sm text-gray-600 leading-snug font-light line-clamp-2 flex-1">
                      {getText(item.itemType === 'event' ? item.description : item.excerpt)}
                    </p>

                    {/* Details - Date and Location/Category */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="text-orange-600 flex-shrink-0" size={14} />
                        <span className="font-normal">{formatDate(item.date, language)}</span>
                      </div>
                      {item.itemType === 'event' && (
                        <>
                          <span className="text-gray-300">•</span>
                          <div className="flex items-center gap-1.5 flex-1 min-w-0">
                            <MapPin className="text-orange-600 flex-shrink-0" size={14} />
                            <span className="font-normal truncate">{getText(item.location)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel hint text */}
        {allInfo.length > cardsPerView && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-xs text-gray-400 mt-4"
          >
            {language === 'id' ? 'Geser untuk melihat lebih banyak →' : 'Swipe to see more →'}
          </motion.p>
        )}
      </div>
    </section>
  )
}