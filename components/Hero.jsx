'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[90vh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-neighborhood-with-suburban-houses-50645-large.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Wujudkan Hunian Impian
            <span className="block mt-2">
              Bersama <span className="text-gold animate-shine">Diamond Group</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-light"
          >
            Developer properti terpercaya dengan 9+ perumahan berkualitas premium
            <span className="block mt-2">di lokasi strategis untuk keluarga Indonesia</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a
              href="#produk"
              className="inline-block px-8 py-4 bg-gold text-white font-semibold text-lg rounded-full hover:bg-gold/90 transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:scale-105 uppercase tracking-wider"
            >
              Lihat Perumahan
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">12+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Perumahan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5000+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Keluarga Bahagia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Tahun Pengalaman</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-white text-sm mb-2 uppercase tracking-wider">Scroll</span>
            <ChevronDown className="text-gold" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero