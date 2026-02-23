'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { navigationLinks } from '@/data/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false)
  const router = useRouter()
  const { language, changeLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
      }
    } else {
      router.push(href)
      setMobileMenuOpen(false)
    }
    setProjectDropdownOpen(false)
  }

  const toggleLanguage = (lang) => {
    changeLanguage(lang)
  }

  const links = navigationLinks[language] || navigationLinks.id
  const projectSubmenu = language === 'id' 
    ? [{ label: 'Komersil', href: '/proyek?type=commercial' }, { label: 'Subsidi', href: '/proyek?type=subsidized' }]
    : [{ label: 'Commercial', href: '/proyek?type=commercial' }, { label: 'Subsidized', href: '/proyek?type=subsidized' }]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo + Company Name - LEFT */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              {/* Logo Icon */}
              <div className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500' 
                  : 'bg-gradient-to-br from-amber-400 via-orange-400 to-red-400'
              }`}>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  stroke="currentColor"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    fill="white" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Company Name */}
              <div className="flex flex-col leading-none">
                <span className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600' 
                    : 'text-white'
                }`}>
                  diamond group
                </span>
                <span className={`text-[10px] lg:text-xs tracking-wider font-light uppercase mt-0.5 ${
                  scrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Building Excellence
                </span>
              </div>
            </motion.div>

            {/* Navigation Menu + Language Switcher - RIGHT (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link, index) => {
                // Check if this is the Projects link
                const isProjectLink = link.href === '/proyek'
                
                if (isProjectLink) {
                  return (
                    <div 
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setProjectDropdownOpen(true)}
                      onMouseLeave={() => setProjectDropdownOpen(false)}
                    >
                      <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-4 xl:px-5 py-2 text-sm xl:text-[15px] font-medium transition-all duration-300 rounded-lg hover:scale-105 flex items-center gap-1 ${
                          scrolled
                            ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                            : 'text-white hover:text-orange-300 hover:bg-white/10'
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${projectDropdownOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {projectDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                          >
                            {projectSubmenu.map((submenu) => (
                              <button
                                key={submenu.href}
                                onClick={() => handleNavigation(submenu.href)}
                                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                              >
                                {submenu.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(link.href)}
                    className={`px-4 xl:px-5 py-2 text-sm xl:text-[15px] font-medium transition-all duration-300 rounded-lg hover:scale-105 ${
                      scrolled
                        ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                        : 'text-white hover:text-orange-300 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                )
              })}
              
              {/* Language Switcher - Sinar Mas Style (Cleaner) */}
              <div className={`flex items-center gap-0 ml-6 border rounded-lg p-1 transition-all duration-300 ${
                scrolled 
                  ? 'bg-gray-50 border-gray-200' 
                  : 'bg-white/10 border-white/20 backdrop-blur-md'
              }`}>
                <button
                  onClick={() => toggleLanguage('id')}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 rounded-md ${
                    language === 'id'
                      ? scrolled 
                        ? 'bg-orange-600 text-white shadow-sm' 
                        : 'bg-white text-gray-900 shadow-sm'
                      : scrolled
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  IN
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 rounded-md ${
                    language === 'en'
                      ? scrolled 
                        ? 'bg-orange-600 text-white shadow-sm' 
                        : 'bg-white text-gray-900 shadow-sm'
                      : scrolled
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
              ) : (
                <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
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
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-black">
              <div className="flex flex-col items-center justify-center h-full space-y-6 px-8">
                {links.map((link, index) => {
                  const isProjectLink = link.href === '/proyek'
                  
                  if (isProjectLink) {
                    return (
                      <div key={link.href} className="text-center space-y-3">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-white text-2xl font-semibold tracking-wide"
                        >
                          {link.label}
                        </motion.div>
                        {projectSubmenu.map((submenu, subIndex) => (
                          <motion.button
                            key={submenu.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index + subIndex * 0.5) * 0.1 }}
                            onClick={() => handleNavigation(submenu.href)}
                            className="block text-white/80 text-lg hover:text-orange-400 transition-colors duration-300"
                          >
                            • {submenu.label}
                          </motion.button>
                        ))}
                      </div>
                    )
                  }
                  
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigation(link.href)}
                      className="text-white text-2xl font-semibold tracking-wide hover:text-orange-400 transition-colors duration-300 hover:scale-105"
                    >
                      {link.label}
                    </motion.button>
                  )
                })}
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-3 mt-8 bg-white/10 rounded-lg p-2 backdrop-blur-md">
                  <button
                    onClick={() => {
                      toggleLanguage('id')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-6 py-3 text-sm font-bold tracking-wider transition-all duration-300 rounded-md ${
                      language === 'id'
                        ? 'bg-white text-gray-900'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    IN
                  </button>
                  <button
                    onClick={() => {
                      toggleLanguage('en')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-6 py-3 text-sm font-bold tracking-wider transition-all duration-300 rounded-md ${
                      language === 'en'
                        ? 'bg-white text-gray-900'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}