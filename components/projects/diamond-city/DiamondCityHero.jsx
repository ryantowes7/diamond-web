'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DiamondCityHero({ data, language = 'id', onWhatsAppClick }) {
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  // WhatsApp number - bisa dari data atau default
  const whatsappNumber = '6281234567890' // Ganti dengan nomor WA Diamond City

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'id' 
        ? `Halo, saya tertarik dengan Diamond City. Mohon informasi lebih lanjut.`
        : `Hello, I'm interested in Diamond City. Please provide more information.`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.hero.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                {getText(data.type)}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {data.name}
            </motion.h1>

            {/* Location - Updated Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-2 text-white/90 text-lg lg:text-xl mb-8"
            >
              <MapPin size={24} className="text-orange-500 flex-shrink-0" />
              <span className="font-medium">Patrang, Jember</span>
            </motion.div>

            {/* Single Contact Button - No Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="px-8 py-6 text-base lg:text-lg font-semibold rounded-xl bg-orange-600 hover:bg-orange-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}