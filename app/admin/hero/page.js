'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';
import { Save, Loader } from 'lucide-react';

export default function HeroPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    headline: '',
    subheadline: '',
    backgroundImage: '',
    ctaText: '',
    stats: []
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    } else if (user) {
      fetchData();
    }
  }, [user, authLoading, router]);

  const fetchData = async () => {
    try {
      const result = await api.getHero();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      await api.updateHero(data);
      setSuccess('Hero section berhasil diupdate!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const updateStat = (index, field, value) => {
    const newStats = [...data.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setData({ ...data, stats: newStats });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hero Section</h1>
          <p className="text-gray-600 mb-8">Kelola konten hero section homepage</p>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-600"
            >
              {success}
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Headline
              </label>
              <textarea
                value={data.headline}
                onChange={(e) => setData({ ...data, headline: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Membangun Hunian Impian..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subheadline
              </label>
              <textarea
                value={data.subheadline}
                onChange={(e) => setData({ ...data, subheadline: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Developer properti terpercaya..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Image URL
              </label>
              <input
                type="url"
                value={data.backgroundImage}
                onChange={(e) => setData({ ...data, backgroundImage: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="https://images.unsplash.com/..."
                required
              />
              <p className="mt-2 text-sm text-gray-500">Gunakan URL gambar dari Unsplash atau CDN lainnya</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CTA Button Text
              </label>
              <input
                type="text"
                value={data.ctaText}
                onChange={(e) => setData({ ...data, ctaText: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Lihat Perumahan"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Statistik
              </label>
              <div className="space-y-4">
                {data.stats.map((stat, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => updateStat(index, 'value', e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="10+"
                      required
                    />
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => updateStat(index, 'label', e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Perumahan"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              <span>{saving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AdminLayout>
  );
}