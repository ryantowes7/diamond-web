'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { contactInfo, marketingTeam } from '@/data/contact'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function KontakPage() {
  const handleWhatsApp = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '')
    window.open(`https://wa.me/${cleanPhone}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium tracking-wide">
                Hubungi Kami
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
              Mari Wujudkan Hunian
              <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Impian Anda
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tim profesional kami siap membantu Anda menemukan properti yang sempurna. 
              Konsultasi gratis dan layanan terpercaya untuk keluarga Indonesia.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami melalui berbagai channel yang tersedia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4">
                    <Phone className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Telepon</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
                    <Mail className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Alamat</h3>
                  <p className="text-gray-600 font-medium">{contactInfo.address}</p>
                </div>
              </Card>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4">
                    <Clock className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm font-medium">{contactInfo.workingHours}</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-semibold tracking-wide">
                Tim Profesional Kami
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Marketing Consultant
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berpengalaman dan berdedikasi membantu Anda menemukan properti terbaik sesuai kebutuhan dan budget
            </p>
          </motion.div>

          {/* Marketing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {marketingTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative w-28 h-28 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <span className="text-3xl font-bold text-white">
                        {member.initials}
                      </span>
                      {/* Online Badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full shadow-lg" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <div className="inline-block px-4 py-2 bg-gray-100 rounded-xl">
                      <p className="text-sm text-gray-700 font-medium">
                        {member.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 group/link"
                    >
                      <Phone size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 group/link"
                    >
                      <Mail size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium break-all">{member.email}</span>
                    </a>
                  </div>

                  {/* WhatsApp Button */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      onClick={() => handleWhatsApp(member.whatsapp)}
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Chat WhatsApp
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor pusat kami untuk konsultasi langsung dengan tim marketing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden rounded-3xl shadow-2xl">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Group Location"
              />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Memulai Investasi Properti Anda?
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-10 leading-relaxed">
              Hubungi tim marketing kami sekarang untuk konsultasi gratis dan penawaran eksklusif
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleWhatsApp(contactInfo.whatsapp)}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold shadow-2xl"
                >
                  <MessageCircle className="mr-2" size={24} />
                  Konsultasi Gratis
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.location.href = '#kontak'}
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-xl px-8 py-6 text-lg font-bold"
                >
                  <Send className="mr-2" size={24} />
                  Lihat Proyek
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleWhatsApp(contactInfo.whatsapp)}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full shadow-2xl transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.button>

      <Footer />
    </main>
  )
}