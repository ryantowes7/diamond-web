'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Tentang Kami', href: '#profil' },
    { name: 'Update Terbaru', href: '#update' },
    { name: 'Produk Perumahan', href: '#produk' },
    { name: 'Hubungi Kami', href: '#kontak' },
  ]

  const housingLinks = [
    { name: 'Diamond City', href: '#' },
    { name: 'Diamond Hills', href: '#' },
    { name: 'Diamond Garden', href: '#' },
    { name: 'Diamond Valley', href: '#' },
    { name: 'Diamond Paradise', href: '#' },
    { name: 'Lihat Semua', href: '#produk' },
  ]

  const socialMedia = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-gold">DIAMOND</span>
                <span className="ml-2">GROUP</span>
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Developer properti terpercaya sejak 2009
              </p>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Membangun hunian berkualitas premium untuk keluarga Indonesia dengan lokasi strategis dan fasilitas lengkap.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {socialMedia.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300 group"
                  >
                    <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Housing List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Perumahan</h4>
            <ul className="space-y-3">
              {housingLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+6281234567890" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm block">
                    +62 812-3456-7890
                  </a>
                  <a href="tel:+6281398765432" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm block">
                    +62 813-9876-5432
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:info@diamondgroup.co.id" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  info@diamondgroup.co.id
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Jl. Gajah Mada No. 123<br />
                  Jember, Jawa Timur 68121
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-gold font-semibold">Diamond Group</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer