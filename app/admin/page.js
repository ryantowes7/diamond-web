'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, Newspaper, Building2, Phone, Settings, Save, 
  Plus, Edit, Trash2, Image as ImageIcon, MapPin, Calendar,
  Users, Mail, Facebook, Instagram, Youtube, Linkedin,
  FileText, Video, MessageCircle, Clock, DollarSign, Eye
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

export default function AdminCMS() {
  const [activeTab, setActiveTab] = useState('hero')
  const [isSaving, setIsSaving] = useState(false)

  // Hero Section State
  const [heroData, setHeroData] = useState({
    headline: 'Wujudkan Hunian Impian',
    headlineHighlight: 'Diamond Group',
    subheading: 'Developer properti terpercaya dengan 9+ perumahan berkualitas premium di lokasi strategis untuk keluarga Indonesia',
    ctaText: 'Lihat Perumahan',
    ctaLink: '#produk',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-neighborhood-with-suburban-houses-50645-large.mp4',
    stats: [
      { number: '12+', label: 'Perumahan' },
      { number: '5000+', label: 'Keluarga Bahagia' },
      { number: '15+', label: 'Tahun Pengalaman' }
    ]
  })

  // News Section State
  const [newsData, setNewsData] = useState({
    pinnedNews: {
      title: 'Grand Opening Diamond Hills Residence - Hunian Premium di Jantung Kota',
      excerpt: 'Diamond Group dengan bangga mempersembahkan proyek terbaru, Diamond Hills Residence. Hunian eksklusif dengan konsep modern minimalis yang dilengkapi fasilitas premium.',
      image: 'https://images.unsplash.com/photo-1758448511648-d7d8e1993c3f?w=800&q=80',
      date: '15 Januari 2025',
      category: 'Launching'
    },
    newsItems: [
      {
        id: 2,
        title: 'Diamond City Raih Penghargaan Best Housing Complex 2024',
        image: 'https://images.unsplash.com/photo-1542644425-bc949ec841a4?w=400&q=80',
        date: '10 Januari 2025',
        category: 'Prestasi'
      },
      {
        id: 3,
        title: 'Program KPR Bunga 0% untuk 100 Unit Pertama',
        image: 'https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?w=400&q=80',
        date: '5 Januari 2025',
        category: 'Promo'
      },
      {
        id: 4,
        title: 'Groundbreaking Diamond Garden Residence Fase 2',
        image: 'https://images.unsplash.com/photo-1543721482-bc95ff1f1dea?w=400&q=80',
        date: '28 Desember 2024',
        category: 'Update'
      },
      {
        id: 5,
        title: 'Customer Gathering 2024 - Terima Kasih Keluarga Diamond',
        image: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?w=400&q=80',
        date: '20 Desember 2024',
        category: 'Event'
      }
    ]
  })

  // House Types State
  const [houseTypes, setHouseTypes] = useState([
    {
      id: 1,
      name: 'Diamond Minimalis Type 45',
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?w=600&q=80',
      landSize: '90',
      buildingSize: '45',
      price: '550 Juta',
      location: 'Diamond City, Jember',
      features: ['2 Kamar Tidur', '1 Kamar Mandi', 'Carport', 'Taman']
    },
    {
      id: 2,
      name: 'Diamond Executive Type 60',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
      landSize: '120',
      buildingSize: '60',
      price: '750 Juta',
      location: 'Diamond Hills, Jember',
      features: ['3 Kamar Tidur', '2 Kamar Mandi', 'Carport', 'Taman Belakang']
    },
    {
      id: 3,
      name: 'Diamond Premium Type 90',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80',
      landSize: '150',
      buildingSize: '90',
      price: '1.2 Miliar',
      location: 'Diamond Residence, Jember',
      features: ['4 Kamar Tidur', '3 Kamar Mandi', 'Garasi', 'Kolam Renang']
    },
    {
      id: 4,
      name: 'Diamond Luxury Type 120',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      landSize: '200',
      buildingSize: '120',
      price: '1.8 Miliar',
      location: 'Diamond Garden, Jember',
      features: ['5 Kamar Tidur', '4 Kamar Mandi', 'Garasi 2 Mobil', 'Private Pool']
    }
  ])

  // Housing List State
  const [housingList, setHousingList] = useState([
    { id: 1, name: 'Diamond City', location: 'Jember Kota', units: '500+ Unit', image: 'https://images.unsplash.com/photo-1760535560073-efbdfd2b6a0f?w=600&q=80', status: 'Ready Stock' },
    { id: 2, name: 'Diamond Hills Residence', location: 'Jember Selatan', units: '300+ Unit', image: 'https://images.unsplash.com/photo-1769980111478-96f84e9a6919?w=600&q=80', status: 'Pre-Launching' },
    { id: 3, name: 'Diamond Garden', location: 'Jember Utara', units: '450+ Unit', image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?w=600&q=80', status: 'Ready Stock' },
    { id: 4, name: 'Diamond Valley', location: 'Jember Timur', units: '250+ Unit', image: 'https://images.unsplash.com/photo-1762944082416-bd1b98ccfcb1?w=600&q=80', status: 'Sold Out 90%' },
    { id: 5, name: 'Diamond Paradise', location: 'Jember Barat', units: '350+ Unit', image: 'https://images.unsplash.com/photo-1770064319741-bebbf0cb51e0?w=600&q=80', status: 'Ready Stock' },
    { id: 6, name: 'Diamond Residence', location: 'Jember Tengah', units: '400+ Unit', image: 'https://images.unsplash.com/photo-1762245464399-2db6f46c580a?w=600&q=80', status: 'Ready Stock' },
    { id: 7, name: 'Diamond Green', location: 'Tanggul', units: '280+ Unit', image: 'https://images.unsplash.com/photo-1760535560073-efbdfd2b6a0f?w=600&q=80', status: 'Coming Soon' },
    { id: 8, name: 'Diamond Park', location: 'Rambipuji', units: '320+ Unit', image: 'https://images.unsplash.com/photo-1769980111478-96f84e9a6919?w=600&q=80', status: 'Ready Stock' },
    { id: 9, name: 'Diamond Bay', location: 'Jember Pusat', units: '180+ Unit', image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?w=600&q=80', status: 'Ready Stock' }
  ])

  // Contact & Settings State
  const [contactSettings, setContactSettings] = useState({
    phones: ['+62 812-3456-7890', '+62 813-9876-5432'],
    emails: ['info@diamondgroup.co.id', 'marketing@diamondgroup.co.id'],
    address: 'Jl. Gajah Mada No. 123, Jember, Jawa Timur 68121',
    workingHours: ['Senin - Jumat: 08.00 - 17.00', 'Sabtu: 08.00 - 14.00'],
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo Diamond Group, saya tertarik dengan perumahan Anda',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4900.936143619621!2d113.67655827500887!3d-8.147440491882799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695e99160873d%3A0x37069fdd051b03cf!2sDIAMOND%20CITY!5e1!3m2!1sid!2sid!4v1771311690162!5m2!1sid!2sid',
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      linkedin: 'https://linkedin.com'
    }
  })

  // Save Handler
  const handleSave = async (section) => {
    setIsSaving(true)
    try {
      let data
      switch(section) {
        case 'hero':
          data = heroData
          break
        case 'news':
          data = newsData
          break
        case 'houseTypes':
          data = houseTypes
          break
        case 'housingList':
          data = housingList
          break
        case 'contact':
          data = contactSettings
          break
      }

      const response = await fetch('/api/cms/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, data })
      })

      if (response.ok) {
        toast.success(`✓ ${section} berhasil disimpan!`)
      } else {
        throw new Error('Gagal menyimpan')
      }
    } catch (error) {
      toast.error(`✗ Gagal menyimpan ${section}: ${error.message}`)
    } finally {
      setIsSaving(false)
    }
  }

  // Load Content on Mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/api/cms/content')
        if (response.ok) {
          const data = await response.json()
          if (data.hero) setHeroData(data.hero)
          if (data.news) setNewsData(data.news)
          if (data.houseTypes) setHouseTypes(data.houseTypes)
          if (data.housingList) setHousingList(data.housingList)
          if (data.contact) setContactSettings(data.contact)
        }
      } catch (error) {
        console.error('Gagal memuat konten:', error)
      }
    }
    loadContent()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">
                <span className="text-gold">DIAMOND</span>
                <span className="ml-2 text-gray-800">CMS</span>
              </div>
              <span className="text-sm text-gray-500 hidden md:inline">Content Management System</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/', '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Lihat Website
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleSave(activeTab)}
                disabled={isSaving}
                className="bg-gold hover:bg-gold/90"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-4 bg-white p-2 rounded-lg shadow-sm mb-8">
            <TabsTrigger value="hero" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Hero</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="w-4 h-4" />
              <span className="hidden sm:inline">Update</span>
            </TabsTrigger>
            <TabsTrigger value="houseTypes" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Tipe Rumah</span>
            </TabsTrigger>
            <TabsTrigger value="housingList" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Perumahan</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Kontak</span>
            </TabsTrigger>
          </TabsList>

          {/* HERO SECTION */}
          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Kelola konten bagian Hero di halaman utama</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="headline">Headline Utama</Label>
                  <Input
                    id="headline"
                    value={heroData.headline}
                    onChange={(e) => setHeroData({ ...heroData, headline: e.target.value })}
                    placeholder="Wujudkan Hunian Impian"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="headlineHighlight">Headline Highlight (Warna Emas)</Label>
                  <Input
                    id="headlineHighlight"
                    value={heroData.headlineHighlight}
                    onChange={(e) => setHeroData({ ...heroData, headlineHighlight: e.target.value })}
                    placeholder="Diamond Group"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subheading">Subheading</Label>
                  <Textarea
                    id="subheading"
                    value={heroData.subheading}
                    onChange={(e) => setHeroData({ ...heroData, subheading: e.target.value })}
                    rows={3}
                    placeholder="Developer properti terpercaya..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ctaText">Teks Tombol CTA</Label>
                    <Input
                      id="ctaText"
                      value={heroData.ctaText}
                      onChange={(e) => setHeroData({ ...heroData, ctaText: e.target.value })}
                      placeholder="Lihat Perumahan"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ctaLink">Link Tombol CTA</Label>
                    <Input
                      id="ctaLink"
                      value={heroData.ctaLink}
                      onChange={(e) => setHeroData({ ...heroData, ctaLink: e.target.value })}
                      placeholder="#produk"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="videoUrl">URL Video Background</Label>
                  <Input
                    id="videoUrl"
                    value={heroData.videoUrl}
                    onChange={(e) => setHeroData({ ...heroData, videoUrl: e.target.value })}
                    placeholder="https://..."
                  />
                  <p className="text-xs text-gray-500">Masukkan URL video MP4 (Mixkit, Pexels, atau hosting sendiri)</p>
                </div>

                <div className="space-y-4">
                  <Label>Statistik (3 Items)</Label>
                  {heroData.stats.map((stat, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                      <div className="space-y-2">
                        <Label>Angka</Label>
                        <Input
                          value={stat.number}
                          onChange={(e) => {
                            const newStats = [...heroData.stats]
                            newStats[index].number = e.target.value
                            setHeroData({ ...heroData, stats: newStats })
                          }}
                          placeholder="12+"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Label</Label>
                        <Input
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...heroData.stats]
                            newStats[index].label = e.target.value
                            setHeroData({ ...heroData, stats: newStats })
                          }}
                          placeholder="Perumahan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NEWS SECTION */}
          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Berita Utama (Pinned)</CardTitle>
                <CardDescription>Berita besar yang ditampilkan di area utama</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Judul</Label>
                  <Input
                    value={newsData.pinnedNews.title}
                    onChange={(e) => setNewsData({ 
                      ...newsData, 
                      pinnedNews: { ...newsData.pinnedNews, title: e.target.value }
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Excerpt</Label>
                  <Textarea
                    value={newsData.pinnedNews.excerpt}
                    onChange={(e) => setNewsData({ 
                      ...newsData, 
                      pinnedNews: { ...newsData.pinnedNews, excerpt: e.target.value }
                    })}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>URL Gambar</Label>
                    <Input
                      value={newsData.pinnedNews.image}
                      onChange={(e) => setNewsData({ 
                        ...newsData, 
                        pinnedNews: { ...newsData.pinnedNews, image: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tanggal</Label>
                    <Input
                      value={newsData.pinnedNews.date}
                      onChange={(e) => setNewsData({ 
                        ...newsData, 
                        pinnedNews: { ...newsData.pinnedNews, date: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Kategori</Label>
                    <Input
                      value={newsData.pinnedNews.category}
                      onChange={(e) => setNewsData({ 
                        ...newsData, 
                        pinnedNews: { ...newsData.pinnedNews, category: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Berita Kecil (4 Items)</CardTitle>
                <CardDescription>Berita pendukung yang ditampilkan dalam grid</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {newsData.newsItems.map((news, index) => (
                  <div key={news.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Berita #{index + 1}</h4>
                    </div>
                    <div className="space-y-2">
                      <Label>Judul</Label>
                      <Input
                        value={news.title}
                        onChange={(e) => {
                          const newItems = [...newsData.newsItems]
                          newItems[index].title = e.target.value
                          setNewsData({ ...newsData, newsItems: newItems })
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>URL Gambar</Label>
                        <Input
                          value={news.image}
                          onChange={(e) => {
                            const newItems = [...newsData.newsItems]
                            newItems[index].image = e.target.value
                            setNewsData({ ...newsData, newsItems: newItems })
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Tanggal</Label>
                        <Input
                          value={news.date}
                          onChange={(e) => {
                            const newItems = [...newsData.newsItems]
                            newItems[index].date = e.target.value
                            setNewsData({ ...newsData, newsItems: newItems })
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Kategori</Label>
                        <Input
                          value={news.category}
                          onChange={(e) => {
                            const newItems = [...newsData.newsItems]
                            newItems[index].category = e.target.value
                            setNewsData({ ...newsData, newsItems: newItems })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* HOUSE TYPES SECTION */}
          <TabsContent value="houseTypes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tipe Rumah</CardTitle>
                <CardDescription>Kelola berbagai tipe rumah yang ditawarkan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {houseTypes.map((house, index) => (
                  <div key={house.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Tipe Rumah #{index + 1}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Nama Tipe</Label>
                        <Input
                          value={house.name}
                          onChange={(e) => {
                            const newTypes = [...houseTypes]
                            newTypes[index].name = e.target.value
                            setHouseTypes(newTypes)
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Lokasi</Label>
                        <Input
                          value={house.location}
                          onChange={(e) => {
                            const newTypes = [...houseTypes]
                            newTypes[index].location = e.target.value
                            setHouseTypes(newTypes)
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label>Luas Tanah (m²)</Label>
                        <Input
                          value={house.landSize}
                          onChange={(e) => {
                            const newTypes = [...houseTypes]
                            newTypes[index].landSize = e.target.value
                            setHouseTypes(newTypes)
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Luas Bangunan (m²)</Label>
                        <Input
                          value={house.buildingSize}
                          onChange={(e) => {
                            const newTypes = [...houseTypes]
                            newTypes[index].buildingSize = e.target.value
                            setHouseTypes(newTypes)
                          }}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>Harga</Label>
                        <Input
                          value={house.price}
                          onChange={(e) => {
                            const newTypes = [...houseTypes]
                            newTypes[index].price = e.target.value
                            setHouseTypes(newTypes)
                          }}
                          placeholder="550 Juta"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>URL Gambar</Label>
                      <Input
                        value={house.image}
                        onChange={(e) => {
                          const newTypes = [...houseTypes]
                          newTypes[index].image = e.target.value
                          setHouseTypes(newTypes)
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Fitur (pisahkan dengan koma)</Label>
                      <Input
                        value={house.features.join(', ')}
                        onChange={(e) => {
                          const newTypes = [...houseTypes]
                          newTypes[index].features = e.target.value.split(',').map(f => f.trim())
                          setHouseTypes(newTypes)
                        }}
                        placeholder="2 Kamar Tidur, 1 Kamar Mandi, Carport"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* HOUSING LIST SECTION */}
          <TabsContent value="housingList" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Perumahan</CardTitle>
                <CardDescription>Kelola semua perumahan yang tersedia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {housingList.map((housing, index) => (
                  <div key={housing.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{housing.name}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Nama Perumahan</Label>
                        <Input
                          value={housing.name}
                          onChange={(e) => {
                            const newList = [...housingList]
                            newList[index].name = e.target.value
                            setHousingList(newList)
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Lokasi</Label>
                        <Input
                          value={housing.location}
                          onChange={(e) => {
                            const newList = [...housingList]
                            newList[index].location = e.target.value
                            setHousingList(newList)
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Jumlah Unit</Label>
                        <Input
                          value={housing.units}
                          onChange={(e) => {
                            const newList = [...housingList]
                            newList[index].units = e.target.value
                            setHousingList(newList)
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Status</Label>
                        <Input
                          value={housing.status}
                          onChange={(e) => {
                            const newList = [...housingList]
                            newList[index].status = e.target.value
                            setHousingList(newList)
                          }}
                          placeholder="Ready Stock / Coming Soon / Sold Out"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>URL Gambar</Label>
                        <Input
                          value={housing.image}
                          onChange={(e) => {
                            const newList = [...housingList]
                            newList[index].image = e.target.value
                            setHousingList(newList)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* CONTACT SECTION */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kontak & Pengaturan</CardTitle>
                <CardDescription>Kelola informasi kontak dan pengaturan umum</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Nomor Telepon</Label>
                  {contactSettings.phones.map((phone, index) => (
                    <Input
                      key={index}
                      value={phone}
                      onChange={(e) => {
                        const newPhones = [...contactSettings.phones]
                        newPhones[index] = e.target.value
                        setContactSettings({ ...contactSettings, phones: newPhones })
                      }}
                      placeholder="+62 812-3456-7890"
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <Label>Email</Label>
                  {contactSettings.emails.map((email, index) => (
                    <Input
                      key={index}
                      value={email}
                      onChange={(e) => {
                        const newEmails = [...contactSettings.emails]
                        newEmails[index] = e.target.value
                        setContactSettings({ ...contactSettings, emails: newEmails })
                      }}
                      placeholder="info@diamondgroup.co.id"
                    />
                  ))}
                </div>

                <div className="space-y-2">
                  <Label>Alamat</Label>
                  <Textarea
                    value={contactSettings.address}
                    onChange={(e) => setContactSettings({ ...contactSettings, address: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Jam Operasional</Label>
                  {contactSettings.workingHours.map((hour, index) => (
                    <Input
                      key={index}
                      value={hour}
                      onChange={(e) => {
                        const newHours = [...contactSettings.workingHours]
                        newHours[index] = e.target.value
                        setContactSettings({ ...contactSettings, workingHours: newHours })
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2">
                  <Label>Nomor WhatsApp (tanpa + dan -)</Label>
                  <Input
                    value={contactSettings.whatsappNumber}
                    onChange={(e) => setContactSettings({ ...contactSettings, whatsappNumber: e.target.value })}
                    placeholder="6281234567890"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Pesan WhatsApp Default</Label>
                  <Textarea
                    value={contactSettings.whatsappMessage}
                    onChange={(e) => setContactSettings({ ...contactSettings, whatsappMessage: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Google Maps Embed URL</Label>
                  <Textarea
                    value={contactSettings.mapEmbedUrl}
                    onChange={(e) => setContactSettings({ ...contactSettings, mapEmbedUrl: e.target.value })}
                    rows={3}
                    placeholder="https://www.google.com/maps/embed?pb=..."
                  />
                  <p className="text-xs text-gray-500">Buka Google Maps → Bagikan → Embed a map → Copy HTML</p>
                </div>

                <div className="space-y-4">
                  <Label>Social Media</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm flex items-center gap-2">
                        <Facebook className="w-4 h-4" /> Facebook
                      </Label>
                      <Input
                        value={contactSettings.socialMedia.facebook}
                        onChange={(e) => setContactSettings({ 
                          ...contactSettings, 
                          socialMedia: { ...contactSettings.socialMedia, facebook: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm flex items-center gap-2">
                        <Instagram className="w-4 h-4" /> Instagram
                      </Label>
                      <Input
                        value={contactSettings.socialMedia.instagram}
                        onChange={(e) => setContactSettings({ 
                          ...contactSettings, 
                          socialMedia: { ...contactSettings.socialMedia, instagram: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm flex items-center gap-2">
                        <Youtube className="w-4 h-4" /> YouTube
                      </Label>
                      <Input
                        value={contactSettings.socialMedia.youtube}
                        onChange={(e) => setContactSettings({ 
                          ...contactSettings, 
                          socialMedia: { ...contactSettings.socialMedia, youtube: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm flex items-center gap-2">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </Label>
                      <Input
                        value={contactSettings.socialMedia.linkedin}
                        onChange={(e) => setContactSettings({ 
                          ...contactSettings, 
                          socialMedia: { ...contactSettings.socialMedia, linkedin: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}