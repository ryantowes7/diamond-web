'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { newsArticles } from '@/data/news'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export default function News() {
  const { language } = useLanguage()
  const featured = newsArticles.find(article => article.featured)
  const others = newsArticles.filter(article => !article.featured)

  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const sectionTitle = language === 'id' ? 'Berita & Update' : 'News & Updates'
  const sectionSubtitle = language === 'id'
    ? 'Informasi terkini seputar perkembangan dan prestasi Diamond Group'
    : 'Latest information about Diamond Group developments and achievements'
  const readMoreText = language === 'id' ? 'Baca Selengkapnya' : 'Read More'
  const readMoreShortText = language === 'id' ? 'Selengkapnya' : 'More'

  return (
    <section id="berita" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
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

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* FEATURED */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-500 h-full">
                <div className="relative h-[420px] lg:h-[630px]">
                  <img
                    src={featured.image}
                    alt={getText(featured.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-orange-600 text-white text-xs font-medium rounded-md shadow-sm">
                      {getText(featured.category)}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                      <Calendar size={14} />
                      <span>{formatDate(featured.date)}</span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 leading-tight">
                      {getText(featured.title)}
                    </h3>

                    <p className="text-white/90 text-xs lg:text-sm mb-3 line-clamp-2 font-light leading-snug">
                      {getText(featured.excerpt)}
                    </p>

                    <button className="inline-flex items-center gap-2 text-white font-medium text-xs hover:gap-3 transition-all duration-300">
                      {readMoreText}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* RIGHT SIDE - FIXED HEIGHT CONTAINER */}
          <div className="flex flex-col justify-between h-[420px] lg:h-[630px]">

            {others.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-[130px] lg:h-[200px]"
              >
                <div className="flex h-full gap-4 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white">

                  {/* IMAGE */}
                  <div className="relative flex-shrink-0 w-44 lg:w-56 h-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={getText(article.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between min-w-0 py-4 pr-4">
                    <div>
                      <h3 className="text-sm lg:text-base font-semibold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                        {getText(article.title)}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed font-light line-clamp-2">
                        {getText(article.excerpt)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="text-orange-600 flex-shrink-0" size={12} />
                        <span>{formatDate(article.date)}</span>
                      </div>

                      <button className="text-xs text-orange-600 font-medium hover:text-orange-700 transition-colors flex items-center gap-1">
                        <span className="hidden md:inline">{readMoreShortText}</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}