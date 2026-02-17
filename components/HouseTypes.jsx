'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Home, Maximize, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HouseTypes = () => {
  const houseTypes = [
    {
      id: 1,
      name: 'Diamond Minimalis Type 45',
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?w=600&q=80',
      landSize: '90',
      buildingSize: '45',
      price: '550 Juta',
      location: 'Diamond City, Jember',
      features: ['2 Kamar Tidur', '1 Kamar Mandi', 'Carport', 'Taman'],
    },
    {
      id: 2,
      name: 'Diamond Executive Type 60',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
      landSize: '120',
      buildingSize: '60',
      price: '750 Juta',
      location: 'Diamond Hills, Jember',
      features: ['3 Kamar Tidur', '2 Kamar Mandi', 'Carport', 'Taman Belakang'],
    },
    {
      id: 3,
      name: 'Diamond Premium Type 90',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80',
      landSize: '150',
      buildingSize: '90',
      price: '1.2 Miliar',
      location: 'Diamond Residence, Jember',
      features: ['4 Kamar Tidur', '3 Kamar Mandi', 'Garasi', 'Kolam Renang'],
    },
    {
      id: 4,
      name: 'Diamond Luxury Type 120',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      landSize: '200',
      buildingSize: '120',
      price: '1.8 Miliar',
      location: 'Diamond Garden, Jember',
      features: ['5 Kamar Tidur', '4 Kamar Mandi', 'Garasi 2 Mobil', 'Private Pool'],
    },
  ]

  return (
    <section className="py-20 bg-white">
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
            Tipe <span className="text-gold">Rumah</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai pilihan tipe rumah yang sesuai dengan kebutuhan keluarga Anda
          </p>
        </motion.div>

        {/* Desktop & Tablet - Carousel */}
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {houseTypes.map((house, index) => (
              <SwiperSlide key={house.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={house.image}
                        alt={house.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        Rp {house.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gold transition-colors duration-300">
                        {house.name}
                      </h3>
                      <p className="flex items-center text-gray-600 text-sm mb-4">
                        <MapPin size={16} className="mr-2 text-gold" />
                        {house.location}
                      </p>

                      {/* Specs */}
                      <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <Home size={20} className="text-gold mr-2" />
                          <div>
                            <p className="text-xs text-gray-500">Luas Bangunan</p>
                            <p className="text-sm font-bold text-gray-800">{house.buildingSize} m²</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Maximize size={20} className="text-gold mr-2" />
                          <div>
                            <p className="text-xs text-gray-500">Luas Tanah</p>
                            <p className="text-sm font-bold text-gray-800">{house.landSize} m²</p>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {house.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Button */}
                      <button className="w-full flex items-center justify-center gap-2 bg-gold text-white py-3 rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 group-hover:gap-4">
                        Lihat Detail
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile - Stack */}
        <div className="md:hidden space-y-6">
          {houseTypes.slice(0, 3).map((house, index) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={house.image}
                  alt={house.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-bold text-sm">
                  Rp {house.price}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {house.name}
                </h3>
                <p className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin size={14} className="mr-1 text-gold" />
                  {house.location}
                </p>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center">
                    <Home size={18} className="text-gold mr-1" />
                    <div>
                      <p className="text-xs text-gray-500">LB</p>
                      <p className="text-sm font-bold">{house.buildingSize} m²</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Maximize size={18} className="text-gold mr-1" />
                    <div>
                      <p className="text-xs text-gray-500">LT</p>
                      <p className="text-sm font-bold">{house.landSize} m²</p>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-gold text-white py-2 rounded-full font-semibold text-sm">
                  Lihat Detail
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HouseTypes