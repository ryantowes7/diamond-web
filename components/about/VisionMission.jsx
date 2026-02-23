'use client'

import { motion } from 'framer-motion'
import { Target, Compass } from 'lucide-react'

export default function VisionMission({ data }) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {data.vision.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.vision.content}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl">
                <Compass className="text-white" size={32} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {data.mission.title}
              </h2>
            </div>
            <ul className="space-y-4">
              {data.mission.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0" />
                  <span className="text-base text-gray-600 leading-relaxed">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Supporting Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[21/9]">
            <img
              src={data.image}
              alt="Diamond Group Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
