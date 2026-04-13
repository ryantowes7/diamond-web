'use client'

import { motion } from 'framer-motion'
import { Building2, Home, Bed, Bath, Car, Layers, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DiamondCityUnits({ data, language = 'id' }) {
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul langsung "Tipe Unit" tanpa label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === 'id' ? 'Tipe Unit' : 'Unit Types'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language === 'id'
              ? 'Pilih tipe rumah yang sesuai dengan kebutuhan keluarga Anda'
              : 'Choose the house type that suits your family needs'}
          </p>
        </motion.div>

        {/* Units Grid - Layout Minimalis */}
        <div className="space-y-12 lg:space-y-16">
          {data.unitTypes.map((unit, idx) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Image & Floor Plan */}
                <div className="bg-slate-50 p-6 lg:p-8">
                  {/* Unit Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                          {unit.name}
                        </h3>
                        <p className="text-sm text-slate-600">{getText(unit.type)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-600 mb-1">
                          {language === 'id' ? 'Mulai dari' : 'Starting from'}
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold text-orange-600">
                          {getText(unit.price.display)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Main Image */}
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden mb-6">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floor Plan Placeholder */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-2 font-medium">
                      {language === 'id' ? 'Denah Lantai' : 'Floor Plan'}
                    </p>
                    <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-slate-400">
                        <Layers size={32} className="mx-auto mb-2" />
                        <p className="text-xs">
                          {language === 'id' ? 'Denah tersedia saat konsultasi' : 'Floor plan available during consultation'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Specifications & Details */}
                <div className="p-6 lg:p-8">
                  {/* Specs Grid - Minimalist Design */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">
                      {language === 'id' ? 'Spesifikasi' : 'Specifications'}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Luas Tanah */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            {language === 'id' ? 'Luas Tanah' : 'Land Size'}
                          </p>
                          <p className="text-base font-bold text-slate-900">{unit.specs.landSize}</p>
                        </div>
                      </div>

                      {/* Luas Bangunan */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Home className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            {language === 'id' ? 'Luas Bangunan' : 'Building Size'}
                          </p>
                          <p className="text-base font-bold text-slate-900">{unit.specs.buildingSize}</p>
                        </div>
                      </div>

                      {/* Kamar Tidur */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Bed className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            {language === 'id' ? 'Kamar Tidur' : 'Bedrooms'}
                          </p>
                          <p className="text-base font-bold text-slate-900">{unit.specs.bedrooms}</p>
                        </div>
                      </div>

                      {/* Kamar Mandi */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Bath className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            {language === 'id' ? 'Kamar Mandi' : 'Bathrooms'}
                          </p>
                          <p className="text-base font-bold text-slate-900">{unit.specs.bathrooms}</p>
                        </div>
                      </div>

                      {/* Carport */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Car className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Carport</p>
                          <p className="text-base font-bold text-slate-900">
                            {unit.specs.carport} {language === 'id' ? 'Mobil' : 'Car'}
                          </p>
                        </div>
                      </div>

                      {/* Lantai */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Layers className="text-orange-600" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">
                            {language === 'id' ? 'Lantai' : 'Floors'}
                          </p>
                          <p className="text-base font-bold text-slate-900">
                            {unit.specs.floors} {language === 'id' ? 'Lantai' : 'Floor'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {getText(unit.description)}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 mb-3">
                      {language === 'id' ? 'Keunggulan:' : 'Features:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {getText(unit.features).map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-6 font-semibold text-base"
                  >
                    {language === 'id' ? 'Hubungi Marketing' : 'Contact Marketing'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}