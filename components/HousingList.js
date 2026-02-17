'use client';

import { motion } from 'framer-motion';
import { MapPin, Home, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { housingProjects } from '@/lib/data';

const HousingList = () => {
  return (
    <section id="produk" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Perumahan</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan perumahan berkualitas di berbagai lokasi strategis
          </p>
        </motion.div>

        {/* Desktop & Tablet: Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6 min-w-max px-4"
            >
              {housingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-80 lg:w-96"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {housingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer h-full"
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
          {project.available} Unit Tersedia
        </div>
        
        {/* Title on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
          <div className="flex items-center space-x-2 text-gray-200">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{project.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          <div>
            <div className="text-xs text-gray-500">Total Unit</div>
            <div className="text-lg font-bold text-gray-900">{project.units}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Tersedia</div>
            <div className="text-lg font-bold text-amber-600">{project.available}</div>
          </div>
        </div>

        {/* Facilities */}
        <div className="space-y-2 mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Fasilitas</div>
          <div className="grid grid-cols-2 gap-2">
            {project.facilities.slice(0, 4).map((facility, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="truncate">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
          Info Lengkap
        </button>
      </div>
    </motion.div>
  );
};

export default HousingList;