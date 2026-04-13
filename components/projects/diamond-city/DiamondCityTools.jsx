'use client'

import { motion } from 'framer-motion'
import { Calculator, GitCompare, Video, MapPin } from 'lucide-react'

const tools = [
  { 
    icon: GitCompare, 
    label: { id: 'Bandingkan Unit', en: 'Compare Units' }, 
    color: 'from-blue-600 to-blue-700', 
    bgColor: 'bg-blue-50',
    action: 'compare'
  },
  { 
    icon: Calculator, 
    label: { id: 'Kalkulator KPR', en: 'KPR Calculator' }, 
    color: 'from-green-600 to-green-700', 
    bgColor: 'bg-green-50',
    action: 'calculator'
  },
  { 
    icon: Video, 
    label: { id: 'Virtual Tour', en: 'Virtual Tour' }, 
    color: 'from-purple-600 to-purple-700', 
    bgColor: 'bg-purple-50',
    action: 'virtual-tour'
  },
  { 
    icon: MapPin, 
    label: { id: 'Lihat Lokasi', en: 'View Location' }, 
    color: 'from-orange-600 to-orange-700', 
    bgColor: 'bg-orange-50',
    action: 'location'
  }
]

export default function DiamondCityTools({ language = 'id' }) {
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const handleToolClick = (action) => {
    if (action === 'location') {
      // Smooth scroll to location section
      const locationSection = document.getElementById('lokasi')
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Placeholder for other tools
      alert(language === 'id' 
        ? 'Fitur ini akan segera tersedia!' 
        : 'This feature is coming soon!')
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
            {language === 'id' ? 'Tools & Layanan' : 'Tools & Services'}
          </h2>
          <p className="text-slate-600">
            {language === 'id' ? 'Fitur untuk membantu Anda menemukan hunian ideal' : 'Features to help you find your ideal home'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleToolClick(tool.action)}
              className={`group ${tool.bgColor} hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-slate-100`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <tool.icon className="text-white" size={28} />
              </div>
              <div className="text-sm font-semibold text-slate-700">
                {getText(tool.label)}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}