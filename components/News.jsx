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

  // Get localized text
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
        {/* Section Header */}
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

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:row-span-3"
            >
              <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative h-full min-h-[450px] lg:min-h-[550px]">
                  <img
                    src={featured.image}
                    alt={getText(featured.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-orange-600 text-white text-xs font-medium rounded-full">
                      {getText(featured.category)}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <Calendar size={14} />
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                      {getText(featured.title)}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 line-clamp-2">
                      {getText(featured.excerpt)}
                    </p>
                    <button className="inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all duration-300">
                      {readMoreText}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Other Articles */}
          {others.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500 h-full">
                <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 h-full">
                  <div className="relative w-full sm:w-40 flex-shrink-0 h-40 sm:h-auto">
                    <img
                      src={article.image}
                      alt={getText(article.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                          {getText(article.category)}
                        </span>
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1.5 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                        {getText(article.title)}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {getText(article.excerpt)}
                      </p>
                    </div>
                    <button className="inline-flex items-center gap-1 text-orange-600 font-medium text-xs hover:gap-2 transition-all duration-300 self-start">
                      {readMoreShortText}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
