'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Diamond } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Profil', href: '#profil' },
    { name: 'Produk', href: '#produk' },
    { name: 'Kontak', href: '#kontak' }
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              {menuItems.slice(0, 2).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-base font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-amber-600'
                      : 'text-white hover:text-amber-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Logo Center */}
            <Link
              href="/"
              className="flex items-center space-x-2 lg:mx-8"
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className={`p-2 rounded-full ${
                  isScrolled ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-white/20 backdrop-blur-sm'
                }`}
              >
                <Diamond className={`w-6 h-6 lg:w-8 lg:h-8 ${
                  isScrolled ? 'text-white' : 'text-amber-400'
                }`} />
              </motion.div>
              <div className="flex flex-col">
                <span className={`text-xl lg:text-2xl font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Diamond
                </span>
                <span className={`text-xs lg:text-sm ${
                  isScrolled ? 'text-amber-600' : 'text-amber-400'
                }`}>
                  GROUP
                </span>
              </div>
            </Link>

            {/* Right Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              {menuItems.slice(2, 4).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-base font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-amber-600'
                      : 'text-white hover:text-amber-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-white shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-4 text-xl font-medium text-gray-700 hover:text-amber-600 border-b border-gray-100 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;