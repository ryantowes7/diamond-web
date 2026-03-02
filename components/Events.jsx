'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { events, formatEventDate } from '@/data/events'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Events() {
  const { language } = useLanguage()

  // Get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = language === 'id' ? 'Event & Aktivitas' : 'Events & Activities'
  const viewAllText = language === 'id' ? 'Lihat Semua' : 'See All'
  const upcomingText = language === 'id' ? 'Akan Datang' : 'Upcoming'
  const ongoingText = language === 'id' ? 'Sedang Berlangsung' : 'Ongoing'

  // Show only first 3 events
  const displayedEvents = events.slice(0, 3)

  return (
    <section id="event" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10 lg:mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {sectionTitle}
          </h2>
          <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm lg:text-base transition-colors group">
            {viewAllText}
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </button>
        </motion.div>

        {/* Events Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Image Card - Portrait Aspect Ratio 3:4 */}
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-3">
                <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={event.image}
                    alt={getText(event.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              </div>

              {/* Event Information - Outside Card */}
              <div className="space-y-2">
                {/* Title */}
                <h3 className="text-base lg:text-lg font-medium text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                  {getText(event.title)}
                </h3>

                {/* Description */}
                <p className="text-xs lg:text-sm text-gray-600 leading-snug font-light line-clamp-2">
                  {getText(event.description)}
                </p>

                {/* Event Details - Date and Location in one line */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}