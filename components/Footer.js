'use client';

import { Diamond, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import { companyInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profil Perusahaan', href: '#profil' },
    { name: 'Produk Kami', href: '#produk' },
    { name: 'Hubungi Kami', href: '#kontak' },
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full">
                <Diamond className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Diamond</span>
                <span className="text-sm text-amber-400">GROUP</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Menu Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Telepon</div>
                  <a href={`tel:${companyInfo.contact.phone}`} className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <a href={`mailto:${companyInfo.contact.email}`} className="text-sm text-gray-300 hover:text-amber-400 transition-colors break-all">
                    {companyInfo.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Alamat</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Jam Operasional</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-400">Senin - Jumat</span>
                <span className="text-gray-300">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sabtu</span>
                <span className="text-gray-300">08:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Minggu</span>
                <span className="text-gray-300">Tutup</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl">
              <p className="text-xs text-gray-400 mb-2">Butuh Konsultasi?</p>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} <span className="text-amber-400 font-semibold">Diamond Group</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;