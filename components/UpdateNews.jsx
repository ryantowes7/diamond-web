'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const UpdateNews = () => {
  const pinnedNews = {
    id: 1,
    title: 'Grand Opening Diamond Hills Residence - Hunian Premium di Jantung Kota',
    excerpt: 'Diamond Group dengan bangga mempersembahkan proyek terbaru, Diamond Hills Residence. Hunian eksklusif dengan konsep modern minimalis yang dilengkapi fasilitas premium.',
    image: 'https://images.unsplash.com/photo-1758448511648-d7d8e1993c3f?w=800&q=80',
    date: '15 Januari 2025',
    category: 'Launching',
  }

  const newsItems = [
    {
      id: 2,
      title: 'Diamond City Raih Penghargaan Best Housing Complex 2024',
      image: 'https://images.unsplash.com/photo-1542644425-bc949ec841a4?w=400&q=80',
      date: '10 Januari 2025',
      category: 'Prestasi',
    },
    {
      id: 3,
      title: 'Program KPR Bunga 0% untuk 100 Unit Pertama',
      image: 'https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?w=400&q=80',
      date: '5 Januari 2025',
      category: 'Promo',
    },
    {
      id: 4,
      title: 'Groundbreaking Diamond Garden Residence Fase 2',
      image: 'https://images.unsplash.com/photo-1543721482-bc95ff1f1dea?w=400&q=80',
      date: '28 Desember 2024',
      category: 'Update',
    },
    {
      id: 5,
      title: 'Customer Gathering 2024 - Terima Kasih Keluarga Diamond',
      image: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?w=400&q=80',
      date: '20 Desember 2024',
      category: 'Event',
    },
  ]

  return (
    <section id="update" className="py-20 bg-gray-50">
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
            Update <span className="text-gold">Diamond</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berita terkini dan update terbaru dari Diamond Group
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Pinned News - Large */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
          >
            <div className="relative h-[600px]">
              <Image
                src={pinnedNews.image}
                alt={pinnedNews.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1 bg-gold text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    {pinnedNews.category}
                  </span>
                  <span className="flex items-center text-white text-sm">
                    <Calendar size={14} className="mr-2" />
                    {pinnedNews.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {pinnedNews.title}
                </h3>
                <p className="text-gray-200 mb-4 line-clamp-2">
                  {pinnedNews.excerpt}
                </p>
                <button className="flex items-center text-gold font-semibold hover:gap-3 gap-2 transition-all duration-300">
                  Baca Selengkapnya
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Small News Grid */}
          <div className="grid grid-cols-2 gap-4">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[285px]">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
                      {news.category}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                      {news.title}
                    </h4>
                    <span className="flex items-center text-white text-xs">
                      <Calendar size={12} className="mr-1" />
                      {news.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Pinned News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="relative h-[400px]">
              <Image
                src={pinnedNews.image}
                alt={pinnedNews.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full uppercase">
                    {pinnedNews.category}
                  </span>
                  <span className="flex items-center text-white text-xs">
                    <Calendar size={12} className="mr-1" />
                    {pinnedNews.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {pinnedNews.title}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2">
                  {pinnedNews.excerpt}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small News */}
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative h-[250px]">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full uppercase mb-2">
                    {news.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <span className="flex items-center text-white text-xs">
                    <Calendar size={12} className="mr-1" />
                    {news.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpdateNews