'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Lightbulb, Award, Users, Leaf, Heart } from 'lucide-react'

const iconMap = {
  'shield-check': ShieldCheck,
  'lightbulb': Lightbulb,
  'award': Award,
  'users': Users,
  'leaf': Leaf,
  'heart': Heart
}

function ValueCard({ value, index }) {
  const Icon = iconMap[value.icon] || Award

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200">
        {/* Icon */}
        <div className="mb-6">
          <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl group-hover:scale-110 transition-transform duration-500">
            <Icon className="text-white" size={32} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {value.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function CoreValues({ values }) {
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nilai-Nilai Kami
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Prinsip fundamental yang memandu setiap keputusan dan tindakan kami
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
