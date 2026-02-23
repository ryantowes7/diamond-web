'use client'

import { motion } from 'framer-motion'

function TimelineItem({ milestone, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Content */}
        <div className="flex-1">
          <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
            <span className="inline-block text-orange-600 font-bold text-lg mb-2">
              {milestone.year}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {milestone.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>

        {/* Timeline Node */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 rounded-full bg-white" />
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="flex-1 hidden lg:block" />
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 hidden lg:block" style={{ left: '50%', transform: 'translateX(-50%)' }} />
      )}
    </motion.div>
  )
}

export default function CompanyHistory({ data }) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.headline}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            {data.subheadline}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto space-y-16">
          {data.milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === data.milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
