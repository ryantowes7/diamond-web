'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Shield, Heart, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Default fallback data
const defaultCorporate = {
  headline: { id: 'Membangun Hunian Menumbuhkan Harapan', en: 'Building Homes, Growing Hope' },
  description: { id: 'Dari hunian, Diamond Group secara konsisten mendorong inovasi kuat untuk membangun masa depan yang lebih baik.', en: 'From housing, Diamond Group consistently drives strong innovation to build a better future.' },
  images: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'https://images.unsplash.com/photo-1564156280315-1d42b4651629',
    'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb'
  ],
  values: {
    id: [
      { icon: 'Shield', label: 'Integritas' },
      { icon: 'Heart', label: 'Loyalitas' },
      { icon: 'Lightbulb', label: 'Inovasi' }
    ],
    en: [
      { icon: 'Shield', label: 'Integrity' },
      { icon: 'Heart', label: 'Loyalty' },
      { icon: 'Lightbulb', label: 'Innovation' }
    ]
  }
}

const defaultStatistics = {
  id: [
    { label: 'Tahun', value: 10, suffix: '+' },
    { label: 'Perumahan', value: 9, suffix: '' },
    { label: 'Unit', value: 2500, suffix: '+' }
  ],
  en: [
    { label: 'Years', value: 10, suffix: '+' },
    { label: 'Housing', value: 9, suffix: '' },
    { label: 'Units', value: 2500, suffix: '+' }
  ]
}

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
  const [corporateData, setCorporateData] = useState(defaultCorporate)
  const [statisticsData, setStatisticsData] = useState(defaultStatistics)

  // Fetch data from CMS
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/content/home.json', {
          cache: 'no-store',
          headers: { 'Content-Type': 'application/json' }
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.corporate) {
            setCorporateData(data.corporate)
          }
          if (data.statistics) {
            setStatisticsData(data.statistics)
          }
          console.log('✅ Corporate & Statistics data loaded from CMS')
        }
      } catch (error) {
        console.warn('⚠️ Using default corporate data:', error)
      }
    }
    
    fetchData()
  }, [])

  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const stats = statisticsData[language] || statisticsData.id || []
  const values = corporateData.values[language] || corporateData.values.id || []

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
                  {getText(corporateData.headline)}
                </h2>

                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6 max-w-xl">
                  {getText(corporateData.description)}
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
                <ImageCarousel images={corporateData.images} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}