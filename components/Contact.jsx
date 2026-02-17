'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 812-3456-7890', '+62 813-9876-5432'],
      action: 'tel:+6281234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@diamondgroup.co.id', 'marketing@diamondgroup.co.id'],
      action: 'mailto:info@diamondgroup.co.id',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Gajah Mada No. 123', 'Jember, Jawa Timur 68121'],
      action: null,
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 08.00 - 17.00', 'Sabtu: 08.00 - 14.00'],
      action: null,
    },
  ]

  return (
    <section id="kontak" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Hubungi <span className="text-gold">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tim kami siap membantu mewujudkan hunian impian keluarga Anda
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:bg-opacity-100 transition-all duration-300">
                      <Icon className="text-gold group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {contact.title}
                    </h3>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                    {contact.action && (
                      <a
                        href={contact.action}
                        className="mt-4 text-gold hover:text-gold/80 font-semibold text-sm transition-colors duration-300"
                      >
                        Hubungi Sekarang →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold to-yellow-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Siap Memiliki Hunian Impian?
          </h3>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Konsultasikan kebutuhan properti Anda dengan tim profesional kami. 
            Kami siap membantu menemukan hunian yang tepat untuk keluarga Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Diamond%20Group,%20saya%20tertarik%20dengan%20perumahan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="mr-2" size={20} />
              WhatsApp Kami
            </a>
            <a
              href="#produk"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gold transition-all duration-300"
            >
              Lihat Produk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact