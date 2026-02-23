'use client'

import { motion } from 'framer-motion'
import { Home, Maximize, Bed, Bath, CheckCircle, TrendingUp } from 'lucide-react'
import { productTypes } from '@/data/products'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Products() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Tipe Hunian
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Pilihan hunian berkualitas untuk setiap kebutuhan dan budget keluarga Indonesia
          </p>
        </motion.div>

        {/* Product Types - Zig Zag Layout */}
        <div className="space-y-20 lg:space-y-32">
          {productTypes.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>
                {/* Image - Same height as content */}
                <div className={`relative ${
                  index % 2 === 0 ? '' : 'lg:col-start-2'
                }`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Decorative Element */}
                  <div className={`absolute -z-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-3xl ${
                    index % 2 === 0 ? '-bottom-12 -right-12' : '-bottom-12 -left-12'
                  }`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-4">
                    <Home className="inline mr-2" size={16} />
                    {product.name}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {product.tagline}
                  </h3>
                  
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <Card className="p-4 rounded-xl border-2 border-gray-100 hover:border-orange-200 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Home className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Luas Bangunan</p>
                          <p className="text-lg font-bold text-gray-900">{product.specs.buildingArea}</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 rounded-xl border-2 border-gray-100 hover:border-orange-200 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Maximize className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Luas Tanah</p>
                          <p className="text-lg font-bold text-gray-900">{product.specs.landArea}</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 rounded-xl border-2 border-gray-100 hover:border-orange-200 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Bed className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Kamar Tidur</p>
                          <p className="text-lg font-bold text-gray-900">{product.specs.bedrooms}</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 rounded-xl border-2 border-gray-100 hover:border-orange-200 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Bath className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Kamar Mandi</p>
                          <p className="text-lg font-bold text-gray-900">{product.specs.bathrooms}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Facilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Fasilitas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.facilities.map((facility, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg"
                        >
                          <CheckCircle className="text-orange-600" size={16} />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits/Keunggulan */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Keunggulan:</h4>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <TrendingUp className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl px-8"
                  >
                    Lihat Detail Lengkap
                  </Button>
                </div>
              </div>

              {/* Elegant Divider (except last item) */}
              {index < productTypes.length - 1 && (
                <div className="mt-20 lg:mt-32">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}