'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#produk');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[90vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1764222233275-87dc016c11dc"
          alt="Diamond Group Hero"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Membangun Hunian Impian,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Mewujudkan Masa Depan Gemilang
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Developer properti terpercaya dengan 10+ perumahan berkualitas tinggi di berbagai lokasi strategis
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            Lihat Perumahan
          </motion.button>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-300">Perumahan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-2">1500+</div>
              <div className="text-sm sm:text-base text-gray-300">Unit Terjual</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-300">Tahun Pengalaman</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToProducts}
        >
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;