'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { footerLinks, socialLinks } from '@/data/navigation'

const SocialIcon = ({ icon }) => {
  const iconMap = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube,
  }
  const Icon = iconMap[icon] || Facebook
  return <Icon size={20} />
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
                  DIAMOND
                </h3>
                <p className="text-sm tracking-[0.3em] text-gray-400">GROUP</p>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5 text-sm">
                Developer properti terpercaya dengan komitmen menghadirkan hunian berkualitas tinggi dan berkelanjutan untuk keluarga Indonesia.
              </p>
              {/* Social Media */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/5 hover:bg-orange-600 rounded-xl transition-all duration-300"
                    aria-label={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base font-bold mb-5">Perusahaan</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-bold mb-5">Proyek</h4>
            <ul className="space-y-2.5">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investor Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base font-bold mb-5">Investor</h4>
            <ul className="space-y-2.5">
              {footerLinks.investor.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-base font-bold mb-5">Kontak</h4>
            <ul className="space-y-2.5">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Elegant Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-600/30 to-transparent mb-6" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>
            © {currentYear} Diamond Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
