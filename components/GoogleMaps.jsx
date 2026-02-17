'use client'

import { motion } from 'framer-motion'

const GoogleMaps = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lokasi <span className="text-gold">Kantor</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kunjungi kantor pusat kami untuk informasi lebih lanjut
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4900.936143619621!2d113.67655827500887!3d-8.147440491882799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695e99160873d%3A0x37069fdd051b03cf!2sDIAMOND%20CITY!5e1!3m2!1sid!2sid!4v1771311690162!5m2!1sid!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Address Info Below Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Diamond Group - Kantor Pusat
              </h3>
              <p className="text-gray-600">
                Jl. Gajah Mada No. 123, Jember, Jawa Timur 68121
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir//DIAMOND+CITY/@-8.147440491882799,113.67655827500887,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2dd695e99160873d:0x37069fdd051b03cf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Buka di Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GoogleMaps