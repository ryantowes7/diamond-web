/**
 * Diamond City News & Updates
 * Berita dan informasi terkait Diamond City
 */

export const diamondCityNews = [
  {
    id: 'dc-news-1',
    title: {
      id: 'Diamond City Luncurkan Cluster Premium Terbaru',
      en: 'Diamond City Launches Latest Premium Cluster'
    },
    excerpt: {
      id: 'Cluster eksklusif dengan konsep smart home dan fasilitas clubhouse private kini tersedia. Hanya 50 unit dengan desain modern minimalis.',
      en: 'Exclusive cluster with smart home concept and private clubhouse facilities now available. Only 50 units with modern minimalist design.'
    },
    description: {
      id: 'Diamond City menghadirkan cluster premium terbaru dengan konsep hunian modern yang dilengkapi teknologi smart home terintegrasi. Dengan hanya 50 unit tersedia, cluster ini menawarkan privasi maksimal dan akses eksklusif ke fasilitas clubhouse private, swimming pool, dan jogging track.',
      en: 'Diamond City presents the latest premium cluster with modern living concept equipped with integrated smart home technology. With only 50 units available, this cluster offers maximum privacy and exclusive access to private clubhouse facilities, swimming pool, and jogging track.'
    },
    category: {
      id: 'Pengembangan',
      en: 'Development'
    },
    date: '2025-04-10',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: 'dc-news-2',
    title: {
      id: 'Promo Kemerdekaan: DP 0% untuk Diamond City',
      en: 'Independence Promo: 0% Down Payment for Diamond City'
    },
    excerpt: {
      id: 'Rayakan kemerdekaan dengan promo spesial DP 0% dan cicilan ringan hingga 20 tahun. Berlaku untuk semua tipe unit.',
      en: 'Celebrate independence with special 0% down payment promo and light installments up to 20 years. Valid for all unit types.'
    },
    description: {
      id: 'Dalam rangka HUT RI, Diamond City memberikan promo istimewa berupa DP 0%, bebas biaya KPR, dan cicilan ringan hingga 20 tahun untuk semua tipe unit. Promo terbatas hingga akhir Agustus 2025.',
      en: 'In celebration of Independence Day, Diamond City offers special promo of 0% down payment, free KPR fees, and light installments up to 20 years for all unit types. Limited promo until end of August 2025.'
    },
    category: {
      id: 'Promo',
      en: 'Promotion'
    },
    date: '2025-04-05',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
  },
  {
    id: 'dc-news-3',
    title: {
      id: 'Fasilitas Baru: Area Komersial Diamond City Dibuka',
      en: 'New Facility: Diamond City Commercial Area Opens'
    },
    excerpt: {
      id: 'Area komersial seluas 2 hektar kini telah beroperasi dengan berbagai tenant pilihan untuk kebutuhan sehari-hari penghuni.',
      en: '2 hectare commercial area is now operational with various selected tenants for residents daily needs.'
    },
    description: {
      id: 'Diamond City resmi membuka area komersial modern seluas 2 hektar dengan berbagai fasilitas seperti minimarket, food court, klinik kesehatan, dan area retail. Memudahkan penghuni untuk memenuhi kebutuhan tanpa keluar kawasan.',
      en: 'Diamond City officially opens modern commercial area spanning 2 hectares with various facilities such as minimarket, food court, health clinic, and retail area. Making it easier for residents to meet their needs without leaving the area.'
    },
    category: {
      id: 'Fasilitas',
      en: 'Facilities'
    },
    date: '2025-03-28',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
  },
  {
    id: 'dc-news-4',
    title: {
      id: '380 Unit Terjual dalam 6 Bulan Pertama',
      en: '380 Units Sold in First 6 Months'
    },
    excerpt: {
      id: 'Diamond City mencatat penjualan fantastis dengan 380 unit terjual sejak launching, menunjukkan tingginya minat konsumen.',
      en: 'Diamond City records fantastic sales with 380 units sold since launch, showing high consumer interest.'
    },
    description: {
      id: 'Dalam 6 bulan pertama sejak soft launching, Diamond City berhasil menjual 380 unit dari berbagai tipe. Angka ini menunjukkan kepercayaan masyarakat terhadap kualitas dan lokasi strategis Diamond City.',
      en: 'In the first 6 months since soft launch, Diamond City successfully sold 380 units of various types. This figure shows public trust in the quality and strategic location of Diamond City.'
    },
    category: {
      id: 'Pencapaian',
      en: 'Achievement'
    },
    date: '2025-03-15',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
  }
]

// Format date helper
export const formatNewsDate = (dateString, locale = 'id') => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}