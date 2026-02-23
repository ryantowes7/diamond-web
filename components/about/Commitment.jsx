'use client'

import { motion } from 'framer-motion'
import { Building2, TreePine, Shield, Home } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const iconMap = {
  'building': Building2,
  'tree-pine': TreePine,
  'shield': Shield,
  'home': Home
}

function CommitmentCard({ point, index }) {
  const Icon = iconMap[point.icon] || Building2

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/10 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
          <Icon className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            {point.title}
          </h3>
          <p className="text-white/80 leading-relaxed">
            {point.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Commitment({ data }) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.image}
          alt="Diamond Group Commitment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {data.headline}
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-12">
                {data.description}
              </p>
            </motion.div>

            <div className="space-y-8">
              {data.points.map((point, index) => (
                <CommitmentCard key={index} point={point} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Link href={data.cta.href}>
                <Button
                  size="lg"
                  className="px-8 py-6 text-base lg:text-lg font-medium tracking-wide rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {data.cta.label}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Decorative Space (image is background) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}