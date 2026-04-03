'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

// Default fallback data
const defaultEventsData = {
  title: { id: 'Event & Aktivitas', en: 'Events & Activities' },
  list: [
    {
      id: 'event-1',
      title: { id: 'Grand Launching The Kayana', en: 'Grand Launching The Kayana' },
      description: { id: 'Peluncuran kawasan super premium dengan teknologi smart home dan fasilitas eksklusif.', en: 'Launch of super premium area with smart home technology and exclusive facilities.' },
      date: '2025-09-15',
      location: { id: 'The Kayana Sales Gallery, Kaliwates', en: 'The Kayana Sales Gallery, Kaliwates' },
      image: '/uploads/the-kayana.jpeg',
      type: { id: 'Peluncuran Proyek', en: 'Project Launch' },
      status: 'upcoming'
    }
  ]
}

// Helper function to format date
const formatEventDate = (dateString, locale = 'id') => {
  const date = new Date(dateString)
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth()
  
  const monthsID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des']
  const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const monthName = locale === 'id' ? monthsID[month] : monthsEN[month]
  
  return `${day} ${monthName} ${year}`
}

export default function Events() {
  const { language } = useLanguage()
  const [eventsData, setEventsData] = useState(defaultEventsData)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isMobile, setIsMobile] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const x = useMotionValue(0)

  // Fetch events data from CMS
  useEffect(() => {
    async function fetchEventsData() {
      try {
        const response = await fetch('/content/home.json', {
          cache: 'no-store',
          headers: { 'Content-Type': 'application/json' }
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.events) {
            setEventsData(data.events)
            console.log('✅ Events data loaded from CMS')
          }
        }
      } catch (error) {
        console.warn('⚠️ Using default events data:', error)
      }
    }
    
    fetchEventsData()
  }, [])

  // Get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = getText(eventsData.title)
  const viewAllText = language === 'id' ? 'Lihat Semua' : 'See All'
  const upcomingText = language === 'id' ? 'Akan Datang' : 'Upcoming'
  const ongoingText = language === 'id' ? 'Sedang Berlangsung' : 'Ongoing'

  // Show only first 3 events
  const events = eventsData.list || []
  const displayedEvents = events.slice(0, 3)

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1.35)
        setIsMobile(true)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3)
        setIsMobile(false)
      } else {
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
  const maxScroll = -(cardWidth + cardGap) * (displayedEvents.length - cardsPerView)

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

  // Handle drag end - snap to nearest card
  const handleDragEnd = (event, info) => {
    const currentX = x.get()
    const velocity = info.velocity.x
    
    let targetIndex = Math.round(-currentX / (cardWidth + cardGap))
    
    if (Math.abs(velocity) > 500) {
      targetIndex += velocity > 0 ? -1 : 1
    }
    
    const maxIndex = displayedEvents.length - Math.floor(cardsPerView)
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex))
    
    animateToIndex(targetIndex)
  }

  return (
    <section id="event" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            {sectionTitle}
          </h2>
          <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm lg:text-base transition-colors group">
            {viewAllText}
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </button>
        </motion.div>

        {/* Events Carousel - DRAGGABLE (Mobile) / Grid (Desktop) */}
        <div ref={containerRef} className={isMobile ? "overflow-hidden cursor-grab active:cursor-grabbing" : ""}>
          <motion.div
            style={isMobile ? { x } : {}}
            drag={isMobile ? "x" : false}
            dragConstraints={isMobile ? { left: maxScroll, right: 0 } : {}}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            onDragEnd={isMobile ? handleDragEnd : undefined}
            className={isMobile ? "flex gap-5" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"}
          >
            {displayedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isMobile ? "flex-shrink-0 select-none" : "group"}
                style={isMobile ? { 
                  width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 20 / cardsPerView}px)` 
                } : {}}
              >
                {/* Simple Event Card */}
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-[280px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <img
                      src={event.image}
                      alt={getText(event.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 text-white text-xs font-medium rounded-md shadow-md ${
                        event.status === 'ongoing' 
                          ? 'bg-green-600' 
                          : 'bg-orange-600'
                      }`}>
                        {event.status === 'ongoing' ? ongoingText : upcomingText}
                      </span>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-normal rounded-md shadow-sm">
                        {getText(event.type)}
                      </span>
                    </div>
                  </div>

                  {/* Simple Content Below */}
                  <div className="mt-3 space-y-2">
                    {/* Title */}
                    <h3 className="text-base lg:text-lg font-medium text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                      {getText(event.title)}
                    </h3>

                    {/* Description */}
                    <p className="text-xs lg:text-sm text-gray-600 leading-snug font-light line-clamp-2">
                      {getText(event.description)}
                    </p>

                    {/* Event Details - Date and Location */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="text-orange-600 flex-shrink-0" size={14} />
                        <span className="font-normal">{formatEventDate(event.date, language)}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <MapPin className="text-orange-600 flex-shrink-0" size={14} />
                        <span className="font-normal truncate">{getText(event.location)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile hint text */}
        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-xs text-gray-400 mt-4"
          >
            Geser untuk melihat lebih banyak →
          </motion.p>
        )}
      </div>
    </section>
  )
}