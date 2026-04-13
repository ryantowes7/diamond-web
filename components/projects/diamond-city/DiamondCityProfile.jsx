'use client'

import { motion } from 'framer-motion'
import { Map, Home, TrendingUp, Building2 } from 'lucide-react'

const iconMap = {
  'map': Map,
  'home': Home,
  'trending-up': TrendingUp,
  'building': Building2
}

export default function DiamondCityProfile({ data, language = 'id' }) {
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar - Compact Mobile (4 horizontal), Card Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Mobile: Compact 4 kolom horizontal seperti Home */}
          <div className="lg:hidden bg-slate-50 border-y border-slate-200 py-6 rounded-lg">
            <div className="grid grid-cols-4">
              {data.profile.stats.map((stat, idx) => {
                const Icon = iconMap[stat.icon] || Building2
                return (
                  <div
                    key={idx}
                    className={`text-center ${
                      idx !== data.profile.stats.length - 1 ? 'border-r border-slate-300' : ''
                    }`}
                  >
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-slate-900 rounded-lg mb-2">
                      <Icon className="text-white" size={16} />
                    </div>
                    <div className="text-xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-600 px-1">{getText(stat.label)}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop: Card layout seperti sebelumnya */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {data.profile.stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon] || Building2
              return (
                <div 
                  key={idx} 
                  className="p-6 text-center bg-slate-50 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 rounded-xl mb-3">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{getText(stat.label)}</div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Judul langsung tanpa label "PROFIL PERUMAHAN" */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {language === 'id' ? 'Perumahan Diamond City' : 'Diamond City Residential'}
            </h2>
            <div className="text-slate-600 text-base lg:text-lg leading-relaxed space-y-4 whitespace-pre-line">
              {getText(data.profile.description)}
            </div>
          </motion.div>

          {/* Image Grid - 1 besar + 2 kecil (desktop), 1 gambar (mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile: 1 gambar besar */}
            <div className="block lg:hidden">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={data.profile.images[0]}
                  alt={`${data.name} 1`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Desktop: 1 besar + 2 kecil */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Gambar besar - span 2 kolom */}
              <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={data.profile.images[0]}
                  alt={`${data.name} 1`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* 2 gambar kecil */}
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={data.profile.images[1]}
                  alt={`${data.name} 2`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={data.profile.images[2]}
                  alt={`${data.name} 3`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}