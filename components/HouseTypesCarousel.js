'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Home, Maximize, Square, BedDouble, Bath } from 'lucide-react';
import Image from 'next/image';
import { houseTypes } from '@/lib/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const HouseTypesCarousel = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Tipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Rumah</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan tipe rumah yang sesuai dengan kebutuhan dan budget keluarga Anda
          </p>
        </motion.div>

        {/* Desktop & Tablet: Carousel */}
        <div className="hidden sm:block">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper pb-12"
          >
            {houseTypes.map((house) => (
              <SwiperSlide key={house.id} className="max-w-sm">
                <HouseCard house={house} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile: Grid */}
        <div className="sm:hidden grid grid-cols-1 gap-6">
          {houseTypes.map((house, index) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HouseCard house={house} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HouseCard = ({ house }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={house.image}
          alt={house.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{house.name}</h3>
          <p className="text-lg sm:text-xl font-semibold text-amber-400">{house.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Specs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Home className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Luas Bangunan</div>
              <div className="text-sm font-semibold text-gray-900">{house.buildingArea}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Maximize className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Luas Tanah</div>
              <div className="text-sm font-semibold text-gray-900">{house.landArea}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <BedDouble className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Kamar Tidur</div>
              <div className="text-sm font-semibold text-gray-900">{house.bedrooms}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Bath className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Kamar Mandi</div>
              <div className="text-sm font-semibold text-gray-900">{house.bathrooms}</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {house.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
          Lihat Detail
        </button>
      </div>
    </motion.div>
  );
};

export default HouseTypesCarousel;