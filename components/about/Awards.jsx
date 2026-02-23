'use client'

import { motion } from 'framer-motion'
import { Trophy, Award as AwardIcon, Star } from 'lucide-react'

function AwardCard({ award, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Trophy className="text-orange-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
              {award.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
            <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              {award.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Awards({ data }) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="text-orange-500" size={32} fill="currentColor" />
            <Star className="text-orange-500" size={40} fill="currentColor" />
            <Star className="text-orange-500" size={32} fill="currentColor" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.headline}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subheadline}
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.items.map((award, index) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
