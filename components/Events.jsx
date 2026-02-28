'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { events, formatEventDate } from '@/data/events'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Events() {
  const { language } = useLanguage()

  // Get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = language === 'id' ? 'Event & Aktivitas' : 'Events & Activities'
  const sectionSubtitle = language === 'id' 
    ? 'Jangan lewatkan event dan penawaran spesial kami'
    : "Don't miss our events and special offers"
  const detailButtonText = language === 'id' ? 'Daftar Sekarang' : 'Register Now'
  const upcomingText = language === 'id' ? 'Akan Datang' : 'Upcoming'
  const ongoingText = language === 'id' ? 'Sedang Berlangsung' : 'Ongoing'

  return (
    <section id="event" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={getText(event.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg ${
                      event.status === 'ongoing' 
                        ? 'bg-green-600' 
                        : 'bg-orange-600'
                    }`}>
                      {event.status === 'ongoing' ? ongoingText : upcomingText}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                      {getText(event.type)}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {getText(event.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {getText(event.description)}
                  </p>

                  {/* Event Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <Calendar className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>{formatEventDate(event.date, language)}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <MapPin className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>{getText(event.location)}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg py-5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      {detailButtonText}
                      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
