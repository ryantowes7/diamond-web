'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, ChevronDown } from 'lucide-react'
import { footerLinks, socialLinks } from '@/data/navigation'
import { useState } from 'react'

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

const MobileAccordionItem = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
        data-testid={`footer-accordion-${title.toLowerCase().replace(/s+/g, '-')}`}
      >
        <span className="text-base font-semibold text-white">{title}</span>
        <ChevronDown 
          size={20} 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="pb-4 space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block py-1"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/s+/g, '-')}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white" data-testid="footer-section">
      {/* Elegant Decorative Header */}
      <div className="relative w-full bg-[#0F172A] py-3 overflow-hidden">
        {/* Subtle Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 L80 40 L40 80 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="2" fill="rgba(255,255,255,0.1)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          
          {/* Desktop Layout - 3 Columns */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
            
            {/* Column 1: Brand Info & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold text-white mb-4">Diamond Group</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Developer properti terpercaya dengan 9 kawasan perumahan aktif di Indonesia.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Jl. Kasuari, Gebang Taman, Gebang, Kec. Patrang, Jember, Jawa Timur 68117
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white flex-shrink-0" />
                  <a 
                    href="https://wa.me/6281133013377" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    data-testid="footer-phone-link"
                  >
                    +62 811-3301-377
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-white">Ikuti Kami</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-slate-800/50 hover:bg-white hover:text-slate-900 rounded-lg transition-all duration-300"
                      aria-label={social.name}
                      data-testid={`footer-social-${social.icon}`}
                    >
                      <SocialIcon icon={social.icon} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Column 2: Perusahaan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-base font-bold mb-5 text-white">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block"
                      data-testid={`footer-company-${link.label.toLowerCase().replace(/s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Proyek */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-base font-bold mb-5 text-white">Proyek</h4>
              <ul className="space-y-3">
                {footerLinks.projects.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block"
                      data-testid={`footer-project-${link.label.toLowerCase().replace(/s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Hubungi Kami */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h4 className="text-base font-bold mb-5 text-white">Hubungi Kami</h4>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block"
                      data-testid={`footer-contact-${link.label.toLowerCase().replace(/s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Mobile Layout - Accordion */}
          <div className="md:hidden space-y-6">
            {/* Brand & Contact - Always Visible on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">Diamond Group</h3>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Jl. Kasuari, Gebang Taman, Gebang, Kec. Patrang, Jember, Jawa Timur 68117
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white flex-shrink-0" />
                  <a 
                    href="https://wa.me/6281133013377" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    +62 811-3301-377
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Accordion Menu */}
            <div className="border-t border-slate-700/50">
              <MobileAccordionItem title="Perusahaan" links={footerLinks.company} />
              <MobileAccordionItem title="Proyek" links={footerLinks.projects} />
              <MobileAccordionItem title="Hubungi Kami" links={footerLinks.contact} />
            </div>

            {/* Social Media - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-6"
            >
              <h4 className="text-sm font-semibold mb-4 text-white">Ikuti Kami</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-800/50 hover:bg-white hover:text-slate-900 rounded-full transition-all duration-300"
                    aria-label={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-700/50 my-8" />

          {/* Bottom Section - Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400"
          >
            <p className="text-center md:text-left" data-testid="footer-copyright">
              © {currentYear} Diamond Group. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
                data-testid="footer-privacy-policy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
                data-testid="footer-terms"
              >
                Terms & Conditions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}