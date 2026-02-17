'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { motion } from 'framer-motion';
import { 
  Home, 
  Image, 
  Building2, 
  MapPin, 
  Phone, 
  Building,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const cards = [
  { icon: Image, label: 'Hero Section', href: '/admin/hero', color: 'from-blue-500 to-blue-600' },
  { icon: Building2, label: 'Tipe Rumah', href: '/admin/house-types', color: 'from-purple-500 to-purple-600' },
  { icon: MapPin, label: 'Perumahan', href: '/admin/housing-projects', color: 'from-green-500 to-green-600' },
  { icon: Phone, label: 'Kontak', href: '/admin/contact', color: 'from-red-500 to-red-600' },
  { icon: Building, label: 'Company Info', href: '/admin/company', color: 'from-amber-500 to-amber-600' },
];

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 mb-8">Selamat datang di Diamond CMS Admin Panel</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.label}</h3>
                  <p className="text-gray-600 text-sm">Kelola {card.label.toLowerCase()}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center space-x-4">
              <TrendingUp className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Quick Tips</h3>
                <p className="text-amber-50">
                  Mulai dengan mengatur Hero Section untuk tampilan pertama website Anda
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}