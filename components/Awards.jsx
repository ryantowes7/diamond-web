'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Star } from 'lucide-react'
import { awards } from '@/data/awards'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Awards() {
  const { language } = useLanguage()

  // Get localized text
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = language === 'id' ? 'Penghargaan & Prestasi' : 'Awards & Achievements'
  const sectionSubtitle = language === 'id' 
    ? 'Pengakuan atas dedikasi dan komitmen kami dalam menghadirkan hunian berkualitas'
    : 'Recognition of our dedication and commitment to delivering quality homes'

  return (
    <section id="penghargaan" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy className="text-orange-600" size={28} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={award.image}
                    alt={getText(award.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {award.year}
                    </span>
                  </div>

                  {/* Award Icon */}
                  <div className="absolute bottom-3 left-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Award className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  {/* Category */}
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                      {getText(award.category)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                    {getText(award.title)}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs text-gray-600 mb-3 font-medium">
                    {getText(award.organization)}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {getText(award.description)}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
