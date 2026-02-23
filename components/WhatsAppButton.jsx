'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '6281519719102'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Diamond%20Group%2C%20saya%20ingin%20bertanya%20tentang%20properti%20Anda`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
      data-testid="whatsapp-floating-button"
      aria-label="Hubungi kami via WhatsApp"
    >
      <div className="relative">
        {/* Glowing effect - more subtle */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 group-hover:shadow-green-500/50">
          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />
          </div>
          
          {/* Text - Hidden by default, shown on hover on desktop */}
          <div className="hidden md:group-hover:block pr-5 whitespace-nowrap overflow-hidden transition-all duration-300">
            <span className="font-semibold text-sm md:text-base">Chat WhatsApp</span>
          </div>
        </div>

        {/* Notification badge - subtle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.7, type: 'spring', stiffness: 500 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"
        />
      </div>
    </motion.a>
  )
}