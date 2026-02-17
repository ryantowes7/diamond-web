'use client';

import { motion } from 'framer-motion';
import { companyInfo } from '@/lib/data';

const GoogleMaps = () => {
  // Google Maps Embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d${companyInfo.location.lng}!3d${companyInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTInMzEuNyJTIDEwNsKwNTAnNDQuMiJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`;

  return (
    <section id="maps" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lokasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Kantor</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Kunjungi kantor pusat kami untuk konsultasi langsung
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-96 lg:h-[450px]"
            />
          </div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-center shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Diamond Group Headquarters
            </h3>
            <p className="text-white/90 text-sm sm:text-base">
              {companyInfo.contact.address}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMaps;