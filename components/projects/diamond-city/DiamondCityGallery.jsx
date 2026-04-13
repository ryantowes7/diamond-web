'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function DiamondCityGallery({ data, language = 'id' }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.gallery.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.gallery.length) % data.gallery.length)
  }

  useEffect(() => {
    const timer = setInterval(handleNext, 5000)
    return () => clearInterval(timer)
  }, [data.gallery.length])

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul langsung "Galeri Foto" tanpa label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === 'id' ? 'Galeri Foto' : 'Photo Gallery'}
          </h2>
          <p className="text-lg text-slate-600">
            {language === 'id' ? 'Jelajahi keindahan dan fasilitas ' : 'Explore the beauty and facilities of '}
            {data.name}
          </p>
        </motion.div>

        {/* Main Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={data.gallery[currentIndex].image}
                alt={getText(data.gallery[currentIndex].caption)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                {getText(data.gallery[currentIndex].caption)}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          {data.gallery.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                currentIndex === idx
                  ? 'ring-4 ring-orange-600 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={item.image}
                alt={getText(item.caption)}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}