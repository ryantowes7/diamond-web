'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Building2, Home, Bed, Bath, Car, 
  ArrowRight, Phone, Mail, Check, 
  Map, Layers, Smartphone, Leaf, Shield,
  Waves, Heart, Book, Trophy, ShoppingBag,
  TreePine, Footprints, Utensils, ShieldCheck,
  X
} from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projectDetails } from '@/data/project-details'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Icon mapping
const iconMap = {
  'map': Map,
  'layers': Layers,
  'smartphone': Smartphone,
  'leaf': Leaf,
  'shield': Shield,
  'map-pin': MapPin,
  'home': Home,
  'waves': Waves,
  'dumbbell': Building2,
  'trophy': Trophy,
  'shopping-bag': ShoppingBag,
  'book': Book,
  'heart': Heart,
  'tree-pine': TreePine,
  'footprints': Footprints,
  'utensils': Utensils,
  'shield-check': ShieldCheck
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null)
  
  const project = projectDetails[params.slug]
  
  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Proyek Tidak Ditemukan</h1>
          <Button onClick={() => router.push('/proyek')}>
            Kembali ke Halaman Proyek
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.hero.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 bg-orange-600/20 backdrop-blur-sm text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                  {project.tagline}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              >
                {project.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center gap-2 text-white/90 text-lg mb-8"
              >
                <MapPin size={24} />
                <span>{project.city}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-medium rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
                >
                  <Phone className="mr-2" size={20} />
                  Hubungi Marketing
                </Button>
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm"
                >
                  <Mail className="mr-2" size={20} />
                  Request Info
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-white">
              <div className="text-orange-400 text-sm mb-1">Tipe</div>
              <div className="font-semibold">{project.type}</div>
            </div>
            <div className="text-white">
              <div className="text-orange-400 text-sm mb-1">Luas Area</div>
              <div className="font-semibold">{project.landSize}</div>
            </div>
            <div className="text-white">
              <div className="text-orange-400 text-sm mb-1">Total Unit</div>
              <div className="font-semibold">{project.totalUnits}</div>
            </div>
            <div className="text-white">
              <div className="text-orange-400 text-sm mb-1">Status</div>
              <div className="font-semibold">{project.status}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {project.overview.title}
              </h2>
              <div className="text-gray-600 text-base lg:text-lg leading-relaxed space-y-4 whitespace-pre-line">
                {project.overview.description}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {project.overview.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.name} ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Utama
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fitur dan fasilitas premium yang menjadikan {project.name} pilihan terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.keyFeatures.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Building2
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fasilitas Lengkap
            </h2>
            <p className="text-lg text-gray-600">
              Segala yang Anda butuhkan dalam satu kawasan terintegrasi
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {project.facilities.map((facility, idx) => {
              const Icon = iconMap[facility.icon] || Home
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-orange-600" size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {facility.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipe Unit
            </h2>
            <p className="text-lg text-gray-600">
              Berbagai pilihan unit sesuai kebutuhan keluarga Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.unitTypes.map((unit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-full">
                        {unit.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {unit.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{unit.type}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <Building2 className="text-orange-600" size={20} />
                        <div>
                          <div className="text-xs text-gray-500">Luas Tanah</div>
                          <div className="text-sm font-semibold">{unit.landSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home className="text-orange-600" size={20} />
                        <div>
                          <div className="text-xs text-gray-500">Luas Bangunan</div>
                          <div className="text-sm font-semibold">{unit.buildingSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="text-orange-600" size={20} />
                        <div>
                          <div className="text-xs text-gray-500">Kamar Tidur</div>
                          <div className="text-sm font-semibold">{unit.bedrooms}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="text-orange-600" size={20} />
                        <div>
                          <div className="text-xs text-gray-500">Kamar Mandi</div>
                          <div className="text-sm font-semibold">{unit.bathrooms}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {unit.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="text-green-600" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl">
                      Lihat Detail Unit
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lokasi & Aksesibilitas
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              {project.location.address}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {project.location.nearbyPlaces.map((place, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{place.name}</h4>
                  <p className="text-sm text-gray-600">{place.distance} • {place.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={project.location.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Galeri Proyek
            </h2>
            <p className="text-lg text-white/80">
              Lihat lebih dekat keindahan {project.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Wujudkan Hunian Impian Anda di {project.name}
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10">
              Dapatkan penawaran terbaik dan konsultasi gratis dengan marketing kami
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-base lg:text-lg font-medium rounded-2xl bg-white text-orange-600 hover:bg-gray-100"
              >
                <Phone className="mr-2" size={20} />
                Hubungi Sekarang
              </Button>
              <Button
                size="lg"
                className="px-8 py-6 text-base lg:text-lg font-medium rounded-2xl bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 backdrop-blur-sm"
              >
                <Mail className="mr-2" size={20} />
                Jadwalkan Kunjungan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}