'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { navigationLinks } from '@/data/navigation'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // Anchor link - scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
      }
    } else {
      // Regular link - use Next.js router
      router.push(href)
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.left.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm xl:text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Logo - Center */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => handleNavigation('/')}
              >
                <div className="flex flex-col items-center">
                  <span
                    className={`text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider transition-colors duration-300 ${
                      scrolled
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400'
                        : 'text-white'
                    }`}
                  >
                    DIAMOND
                  </span>
                  <span
                    className={`text-xs lg:text-sm tracking-[0.3em] font-light ${
                      scrolled ? 'text-gray-600' : 'text-white/90'
                    }`}
                  >
                    GROUP
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.right.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm xl:text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X
                  className={scrolled ? 'text-gray-900' : 'text-white'}
                  size={28}
                />
              ) : (
                <Menu
                  className={scrolled ? 'text-gray-900' : 'text-white'}
                  size={28}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
                {[...navigationLinks.left, ...navigationLinks.right].map(
                  (link, index) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigation(link.href)}
                      className="text-white text-2xl font-medium tracking-wide hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.label}
                    </motion.button>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}