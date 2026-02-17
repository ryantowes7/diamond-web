'use client';

import { useAuth } from '@/lib/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Home, 
  Image, 
  Building2, 
  MapPin, 
  Phone, 
  Building, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Image, label: 'Hero Section', href: '/admin/hero' },
  { icon: Building2, label: 'Tipe Rumah', href: '/admin/house-types' },
  { icon: MapPin, label: 'Perumahan', href: '/admin/housing-projects' },
  { icon: Phone, label: 'Kontak', href: '/admin/contact' },
  { icon: Building, label: 'Company Info', href: '/admin/company' },
];

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:overflow-y-auto lg:bg-white lg:border-r border-gray-200">
        <div className="flex h-16 items-center justify-center border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">Diamond CMS</div>
              <div className="text-xs text-gray-500">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="mt-8 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl"
          >
            <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Diamond CMS</div>
                  <div className="text-xs text-gray-500">Admin Panel</div>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-8 px-4 space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="absolute bottom-4 left-4 right-4">
              <button
                onClick={logout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.aside>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-600">
                Halo, <span className="font-semibold">{user?.username}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}