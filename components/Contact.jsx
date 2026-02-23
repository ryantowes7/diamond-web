'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { contactInfo } from '@/data/contact'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const handleWhatsApp = () => {
    const phone = contactInfo.whatsapp.replace(/\D/g, '')
    window.open(`https://wa.me/${phone}`, '_blank')
  }

  return (
    <section id="kontak" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Hubungi Kami
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menemukan hunian impian
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Phone */}
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Telepon</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Address */}
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Alamat Kantor Pusat</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </Card>

              {/* Working Hours */}
              <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600 whitespace-pre-line">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </Card>

              {/* WhatsApp CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-xl py-6 text-lg font-medium"
                >
                  <MessageCircle className="mr-2" size={24} />
                  Chat via WhatsApp
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden rounded-3xl shadow-2xl h-full">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Group Location"
              />
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full shadow-2xl transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.button>
    </section>
  )
}