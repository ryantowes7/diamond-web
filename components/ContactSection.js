'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const ContactSection = () => {
  const contactItems = [
    {
      icon: Phone,
      label: 'Telepon',
      value: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.phone}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.contact.email,
      href: `mailto:${companyInfo.contact.email}`,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      label: 'Alamat',
      value: companyInfo.contact.address,
      href: '#maps',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="kontak" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Kami</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tim kami siap membantu mewujudkan hunian impian Anda
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="block"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm sm:text-base break-words">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Siap Memiliki Rumah Impian?
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8">
              Konsultasikan kebutuhan properti Anda dengan tim profesional kami
            </p>
            <motion.a
              href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Halo%20Diamond%20Group,%20saya%20tertarik%20dengan%20perumahan%20Anda`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 sm:px-12 py-4 sm:py-5 bg-white text-amber-600 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-base sm:text-lg">Chat WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;