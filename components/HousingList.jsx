'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import { MapPin, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const HousingList = () => {
  const housingData = [
    {
      id: 1,
      name: 'Diamond City',
      location: 'Jember Kota',
      units: '500+ Unit',
      image: 'https://images.unsplash.com/photo-1760535560073-efbdfd2b6a0f?w=600&q=80',
      status: 'Ready Stock',
    },
    {
      id: 2,
      name: 'Diamond Hills Residence',
      location: 'Jember Selatan',
      units: '300+ Unit',
      image: 'https://images.unsplash.com/photo-1769980111478-96f84e9a6919?w=600&q=80',
      status: 'Pre-Launching',
    },
    {
      id: 3,
      name: 'Diamond Garden',
      location: 'Jember Utara',
      units: '450+ Unit',
      image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?w=600&q=80',
      status: 'Ready Stock',
    },
    {
      id: 4,
      name: 'Diamond Valley',
      location: 'Jember Timur',
      units: '250+ Unit',
      image: 'https://images.unsplash.com/photo-1762944082416-bd1b98ccfcb1?w=600&q=80',
      status: 'Sold Out 90%',
    },
    {
      id: 5,
      name: 'Diamond Paradise',
      location: 'Jember Barat',
      units: '350+ Unit',
      image: 'https://images.unsplash.com/photo-1770064319741-bebbf0cb51e0?w=600&q=80',
      status: 'Ready Stock',
    },
    {
      id: 6,
      name: 'Diamond Residence',
      location: 'Jember Tengah',
      units: '400+ Unit',
      image: 'https://images.unsplash.com/photo-1762245464399-2db6f46c580a?w=600&q=80',
      status: 'Ready Stock',
    },
    {
      id: 7,
      name: 'Diamond Green',
      location: 'Tanggul',
      units: '280+ Unit',
      image: 'https://images.unsplash.com/photo-1760535560073-efbdfd2b6a0f?w=600&q=80',
      status: 'Coming Soon',
    },
    {
      id: 8,
      name: 'Diamond Park',
      location: 'Rambipuji',
      units: '320+ Unit',
      image: 'https://images.unsplash.com/photo-1769980111478-96f84e9a6919?w=600&q=80',
      status: 'Ready Stock',
    },
    {
      id: 9,
      name: 'Diamond Bay',
      location: 'Jember Pusat',
      units: '180+ Unit',
      image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?w=600&q=80',
      status: 'Ready Stock',
    },
  ]

  return (
    <section id="produk" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Daftar <span className="text-gold">Perumahan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            9+ perumahan berkualitas premium di berbagai lokasi strategis
          </p>
        </motion.div>

        {/* Desktop - Horizontal Scroll Grid */}
        <div className="hidden md:block">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <motion.div
              className="flex gap-6"
              style={{ width: 'max-content' }}
            >
              {housingData.map((housing, index) => (
                <motion.div
                  key={housing.id}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer w-[350px] flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={housing.image}
                        alt={housing.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-4 py-2 rounded-full font-bold text-xs shadow-lg ${
                          housing.status === 'Ready Stock' ? 'bg-green-500 text-white' :
                          housing.status === 'Coming Soon' ? 'bg-blue-500 text-white' :
                          housing.status === 'Pre-Launching' ? 'bg-purple-500 text-white' :
                          'bg-gold text-white'
                        }`}>
                          {housing.status}
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                          {housing.name}
                        </h3>
                        <div className="flex items-center justify-between text-white">
                          <p className="flex items-center text-sm">
                            <MapPin size={16} className="mr-2 text-gold" />
                            {housing.location}
                          </p>
                          <p className="flex items-center text-sm">
                            <Users size={16} className="mr-2 text-gold" />
                            {housing.units}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="p-6">
                      <button className="w-full flex items-center justify-center gap-2 bg-gold text-white py-3 rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 group-hover:gap-4">
                        Lihat Detail
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile & Tablet - Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {housingData.map((housing, index) => (
            <motion.div
              key={housing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={housing.image}
                  alt={housing.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full font-bold text-xs ${
                    housing.status === 'Ready Stock' ? 'bg-green-500 text-white' :
                    housing.status === 'Coming Soon' ? 'bg-blue-500 text-white' :
                    housing.status === 'Pre-Launching' ? 'bg-purple-500 text-white' :
                    'bg-gold text-white'
                  }`}>
                    {housing.status}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {housing.name}
                  </h3>
                  <p className="flex items-center text-white text-xs mb-1">
                    <MapPin size={12} className="mr-1 text-gold" />
                    {housing.location}
                  </p>
                  <p className="flex items-center text-white text-xs">
                    <Users size={12} className="mr-1 text-gold" />
                    {housing.units}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <button className="w-full flex items-center justify-center gap-2 bg-gold text-white py-2 rounded-full font-semibold text-sm">
                  Lihat Detail
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default HousingList