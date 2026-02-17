'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Profil', href: '#profil' },
    { name: 'Update', href: '#update' },
    { name: 'Produk', href: '#produk' },
    { name: 'Kontak', href: '#kontak' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-4">
          {/* Left Menu Items */}
          <div className="flex items-center gap-8 mr-12">
            {menuItems.slice(0, 2).map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-gold relative group ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Logo Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-8"
          >
            <Link href="/" className="flex items-center">
              <div className={`text-2xl font-bold tracking-wider ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="text-gold">DIAMOND</span>
                <span className="ml-2">GROUP</span>
              </div>
            </Link>
          </motion.div>

          {/* Right Menu Items */}
          <div className="flex items-center gap-8 ml-12">
            {menuItems.slice(2).map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-gold relative group ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <div className={`text-xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <span className="text-gold">DIAMOND</span> GROUP
            </div>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg rounded-b-2xl overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-gray-800 hover:bg-gold hover:bg-opacity-10 hover:text-gold transition-all duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar