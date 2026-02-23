'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { newsArticles } from '@/data/news'
import { Card } from '@/components/ui/card'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export default function News() {
  const featured = newsArticles.find(article => article.featured)
  const others = newsArticles.filter(article => !article.featured)

  return (
    <section id="berita" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Berita & Update
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Informasi terkini seputar perkembangan dan prestasi Diamond Group
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:row-span-2"
            >
              <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-full">
                      {featured.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                      {featured.title}
                    </h3>
                    <p className="text-white/90 text-base mb-4 line-clamp-2">
                      {featured.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300">
                      Baca Selengkapnya
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Other Articles */}
          <div className="space-y-6 lg:col-span-1">
            {others.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <button className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm hover:gap-3 transition-all duration-300">
                        Selengkapnya
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}