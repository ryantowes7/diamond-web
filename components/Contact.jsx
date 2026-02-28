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
    <section id="kontak" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Hubungi Kami
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menemukan hunian impian
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-5">
              {/* Phone */}
              <Card className="p-5 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-100 rounded-lg">
                    <Phone className="text-orange-600" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">Telepon</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 text-sm hover:text-orange-600 transition-colors duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-5 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-100 rounded-lg">
                    <Mail className="text-orange-600" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 text-sm hover:text-orange-600 transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Address */}
              <Card className="p-5 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-100 rounded-lg">
                    <MapPin className="text-orange-600" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">Alamat Kantor Pusat</h3>
                    <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </Card>

              {/* Working Hours */}
              <Card className="p-5 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-100 rounded-lg">
                    <Clock className="text-orange-600" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{contactInfo.workingHours}</p>
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
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-xl py-5 text-base font-medium"
                >
                  <MessageCircle className="mr-2" size={22} />
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
            <Card className="overflow-hidden rounded-2xl shadow-2xl h-full">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Group Location"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
