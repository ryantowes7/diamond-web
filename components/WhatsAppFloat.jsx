'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after button appears
      setTimeout(() => {
        setShowTooltip(true)
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false)
        }, 5000)
      }, 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const message = encodeURIComponent('Halo Diamond Group, saya tertarik dengan perumahan Anda dan ingin mendapatkan informasi lebih lanjut.')
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white px-4 py-3 rounded-xl shadow-2xl max-w-xs relative hidden md:block"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Close tooltip"
                >
                  <X size={12} className="text-white" />
                </button>
                <p className="text-sm text-gray-800 font-medium">
                  Ada yang bisa kami bantu?
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Chat dengan kami via WhatsApp
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group relative"
            aria-label="Chat WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
            
            {/* Icon */}
            <MessageCircle size={28} className="text-white relative z-10" />
            
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
              1
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat