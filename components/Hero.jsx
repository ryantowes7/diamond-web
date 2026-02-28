'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroData } from '@/data/hero'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Get localized content
  const content = heroData[language] || heroData.id
  const scrollText = language === 'id' ? 'Scroll' : 'Scroll'

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
          poster={heroData.fallbackImage}
        >
          <source src={heroData.videoUrl} type="video/mp4" />
        </video>
        {/* Optimized Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content - Kept Large as Requested */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="content-container w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Headline - Kept Large */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 tracking-tight leading-tight"
            >
              {content.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            >
              {content.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              {content.ctas.map((cta, index) => (
                <Button
                  key={index}
                  onClick={() => scrollToSection(cta.href)}
                  size="lg"
                  className={`
                    px-6 py-5 text-sm lg:text-base font-medium tracking-wide rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl
                    ${cta.variant === 'primary'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                    }
                  `}
                >
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => scrollToSection('#tentang')}
        >
          <span className="text-white/60 text-xs mb-1 tracking-wider group-hover:text-white/90 transition-colors">{scrollText}</span>
          <ChevronDown className="text-white/60 group-hover:text-white/90 transition-colors" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
