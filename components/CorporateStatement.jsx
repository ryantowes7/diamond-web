'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { corporateStatement, statistics } from '@/data/corporate'
import { useLanguage } from '@/contexts/LanguageContext'
import { Shield, Heart, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * value)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('id-ID')}{suffix}
    </span>
  )
}

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.03
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt={`Diamond Group ${index + 1}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      ))}
    </div>
  )
}

export default function CorporateStatement() {
  const { language } = useLanguage()

  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const stats = statistics[language] || statistics.id || []
  const values = corporateStatement.values[language] || corporateStatement.values.id || []

  const iconMap = {
    Shield,
    Heart,
    Lightbulb
  }

  return (
    <section id="tentang" className="bg-white">

      {/* ================= STATISTICS (COMPACT) ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-8 border-y border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center py-4 ${
                  index !== stats.length - 1 ? 'border-r border-gray-300' : ''
                }`}
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-[#0f172a] font-medium tracking-wide mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= CORPORATE STATEMENT ================= */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {getText(corporateStatement.headline)}
                </h2>

                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6 max-w-xl">
                  {getText(corporateStatement.description)}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-10">

                {values.map((value, index) => {
                  const Icon = iconMap[value.icon]
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                      <span className="text-sm text-gray-700 font-medium">
                        {value.label}
                      </span>
                    </div>
                  )
                })}

                {/* Lihat Profil Sejajar */}
                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center text-sm font-semibold text-gray-900 group ml-auto"
                >
                  {language === 'id' ? 'Lihat Profil' : 'See Profile'}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <ImageCarousel images={corporateStatement.images} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}