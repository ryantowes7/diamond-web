'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${companyInfo.contact.whatsapp}?text=Halo%20Diamond%20Group,%20saya%20tertarik%20dengan%20perumahan%20Anda`,
      '_blank'
    );
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-all duration-300"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 right-20 bg-white rounded-2xl shadow-2xl p-4 w-64 hidden sm:block"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">Ada Pertanyaan?</h4>
                  <p className="text-sm text-gray-600">Chat dengan kami sekarang!</p>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
                <div className="w-4 h-4 bg-white transform rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full z-40 pointer-events-none"
      />
    </>
  );
};

export default FloatingWhatsApp;