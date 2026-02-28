/**
 * Development Projects Data - Diamond Group Jember
 * All projects located in Jember, East Java with different sub-districts
 */

export const developments = [
  {
    id: 'rinjani-village',
    name: 'Rinjani Village',
    location: {
      id: 'Sumbersari, Jember',
      en: 'Sumbersari, Jember'
    },
    kecamatan: 'Sumbersari',
    description: {
      id: 'Kawasan hunian terpadu dengan konsep modern township yang menjadi flagship project Diamond Group. Dilengkapi fasilitas komersial lengkap, area pendidikan, dan ruang terbuka hijau yang luas untuk kenyamanan keluarga Indonesia.',
      en: 'Integrated residential area with modern township concept, Diamond Group\'s flagship project. Equipped with complete commercial facilities, educational areas, and extensive green open spaces for Indonesian families\' comfort.'
    },
    image: 'https://images.unsplash.com/photo-1682957205692-6b70103cd372?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwcmVzaWRlbnRpYWx8ZW58MHx8fHwxNzcxOTM1NDQwfDA&ixlib=rb-4.1.0&q=85',
    featured: true,
    type: {
      id: 'Mixed Development',
      en: 'Mixed Development'
    },
    priceRange: {
      min: 450000000,
      max: 850000000,
      display: {
        id: 'Rp 450 Juta - Rp 850 Juta',
        en: 'IDR 450M - IDR 850M'
      }
    },
    landSize: {
      min: 72,
      max: 200,
      display: '72 - 200 m²'
    },
    facilities: {
      id: ['Masjid', 'Taman Bermain', 'Area Komersial', 'Jogging Track', 'Security 24 Jam'],
      en: ['Mosque', 'Playground', 'Commercial Area', 'Jogging Track', '24/7 Security']
    },
    unitsSold: 450,
    totalUnits: 800
  },
  {
    id: 'diamond-city',
    name: 'Diamond City',
    location: {
      id: 'Patrang, Jember',
      en: 'Patrang, Jember'
    },
    kecamatan: 'Patrang',
    description: {
      id: 'Kawasan kota mandiri terpadu dengan konsep mixed-use development. Hunian, komersial, dan fasilitas publik dalam satu lokasi strategis di pusat pertumbuhan Jember.',
      en: 'Integrated self-sufficient city with mixed-use development concept. Residential, commercial, and public facilities in one strategic location at Jember\'s growth center.'
    },
    image: 'https://images.unsplash.com/photo-1758697664059-607c42554702?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzE5MzU0MzV8MA&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Mixed Development',
      en: 'Mixed Development'
    },
    priceRange: {
      min: 500000000,
      max: 1200000000,
      display: {
        id: 'Rp 500 Juta - Rp 1,2 Miliar',
        en: 'IDR 500M - IDR 1.2B'
      }
    },
    landSize: {
      min: 90,
      max: 250,
      display: '90 - 250 m²'
    },
    facilities: {
      id: ['Mall', 'Rumah Sakit', 'Sekolah', 'Hotel', 'Convention Center'],
      en: ['Mall', 'Hospital', 'School', 'Hotel', 'Convention Center']
    },
    unitsSold: 380,
    totalUnits: 1000
  },
  {
    id: 'kampus-village',
    name: 'Kampus Village',
    location: {
      id: 'Sumbersari, Jember',
      en: 'Sumbersari, Jember'
    },
    kecamatan: 'Sumbersari',
    description: {
      id: 'Hunian strategis dekat kawasan kampus, ideal untuk investasi kos-kosan, rumah keluarga muda, dan dosen. Akses mudah ke Universitas Jember dan fasilitas pendidikan lainnya.',
      en: 'Strategic housing near campus area, ideal for boarding house investment, young families, and lecturers. Easy access to Jember University and other educational facilities.'
    },
    image: 'https://images.unsplash.com/photo-1760268076665-21307d384f44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzE5MzU0MzV8MA&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Residensial',
      en: 'Residential'
    },
    priceRange: {
      min: 350000000,
      max: 650000000,
      display: {
        id: 'Rp 350 Juta - Rp 650 Juta',
        en: 'IDR 350M - IDR 650M'
      }
    },
    landSize: {
      min: 60,
      max: 120,
      display: '60 - 120 m²'
    },
    facilities: {
      id: ['Taman', 'Pos Keamanan', 'Area Parkir', 'WiFi Corner'],
      en: ['Park', 'Security Post', 'Parking Area', 'WiFi Corner']
    },
    unitsSold: 220,
    totalUnits: 350
  },
  {
    id: 'diamond-cluster-griya-mangli',
    name: 'Diamond Cluster Griya Mangli Indah',
    location: {
      id: 'Kaliwates, Jember',
      en: 'Kaliwates, Jember'
    },
    kecamatan: 'Kaliwates',
    description: {
      id: 'Cluster premium dengan desain modern minimalis di lokasi strategis pusat kota. Hunian eksklusif dengan konsep gated community dan fasilitas premium untuk keluarga modern.',
      en: 'Premium cluster with modern minimalist design in strategic city center location. Exclusive residence with gated community concept and premium facilities for modern families.'
    },
    image: 'https://images.unsplash.com/photo-1755914815623-9fc97b0aef37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc3MTkzNTQ0Nnww&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Cluster Premium',
      en: 'Premium Cluster'
    },
    priceRange: {
      min: 650000000,
      max: 1100000000,
      display: {
        id: 'Rp 650 Juta - Rp 1,1 Miliar',
        en: 'IDR 650M - IDR 1.1B'
      }
    },
    landSize: {
      min: 100,
      max: 200,
      display: '100 - 200 m²'
    },
    facilities: {
      id: ['Clubhouse', 'Swimming Pool', 'Fitness Center', 'Mini Market', 'CCTV 24 Jam'],
      en: ['Clubhouse', 'Swimming Pool', 'Fitness Center', 'Mini Market', '24/7 CCTV']
    },
    unitsSold: 145,
    totalUnits: 200
  },
  {
    id: 'rajawali-residence',
    name: 'Rajawali Residence',
    location: {
      id: 'Patrang, Jember',
      en: 'Patrang, Jember'
    },
    kecamatan: 'Patrang',
    description: {
      id: 'Perumahan strategis dengan akses mudah ke pusat kota dan fasilitas umum. Cocok untuk keluarga yang menginginkan lokasi strategis dengan harga terjangkau.',
      en: 'Strategic housing with easy access to city center and public facilities. Perfect for families seeking strategic location with affordable prices.'
    },
    image: 'https://images.unsplash.com/photo-1759670509449-23a374206521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzE5MzU0MzV8MA&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Residensial',
      en: 'Residential'
    },
    priceRange: {
      min: 400000000,
      max: 700000000,
      display: {
        id: 'Rp 400 Juta - Rp 700 Juta',
        en: 'IDR 400M - IDR 700M'
      }
    },
    landSize: {
      min: 72,
      max: 150,
      display: '72 - 150 m²'
    },
    facilities: {
      id: ['Masjid', 'Taman', 'Pos Keamanan', 'Jalan Lebar'],
      en: ['Mosque', 'Park', 'Security Post', 'Wide Road']
    },
    unitsSold: 310,
    totalUnits: 450
  },
  {
    id: 'green-hill-boulevard',
    name: 'Green Hill Boulevard',
    location: {
      id: 'Patrang, Jember',
      en: 'Patrang, Jember'
    },
    kecamatan: 'Patrang',
    description: {
      id: 'Hunian hijau dengan konsep eco-living dan pemandangan perbukitan. Udara segar, lingkungan asri, dan desain ramah lingkungan untuk kehidupan sehat keluarga.',
      en: 'Green residence with eco-living concept and hill views. Fresh air, beautiful environment, and eco-friendly design for healthy family living.'
    },
    image: 'https://images.pexels.com/photos/5598008/pexels-photo-5598008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    featured: false,
    type: {
      id: 'Eco Living',
      en: 'Eco Living'
    },
    priceRange: {
      min: 550000000,
      max: 950000000,
      display: {
        id: 'Rp 550 Juta - Rp 950 Juta',
        en: 'IDR 550M - IDR 950M'
      }
    },
    landSize: {
      min: 100,
      max: 250,
      display: '100 - 250 m²'
    },
    facilities: {
      id: ['Jogging Track', 'Taman Luas', 'Area Hijau', 'View Point', 'Organic Garden'],
      en: ['Jogging Track', 'Large Park', 'Green Area', 'View Point', 'Organic Garden']
    },
    unitsSold: 180,
    totalUnits: 300
  },
  {
    id: 'gumuk-mas-permai',
    name: 'Gumuk Mas Permai',
    location: {
      id: 'Gumukmas, Jember',
      en: 'Gumukmas, Jember'
    },
    kecamatan: 'Gumukmas',
    description: {
      id: 'Hunian nyaman untuk keluarga dengan harga terjangkau di kawasan berkembang Gumukmas. Lingkungan tenang dan aman, cocok untuk investasi jangka panjang.',
      en: 'Comfortable housing for families with affordable prices in developing Gumukmas area. Quiet and safe environment, perfect for long-term investment.'
    },
    image: 'https://images.unsplash.com/photo-1759670524695-8d78b05b385b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzE5MzU0MzV8MA&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Residensial',
      en: 'Residential'
    },
    priceRange: {
      min: 300000000,
      max: 550000000,
      display: {
        id: 'Rp 300 Juta - Rp 550 Juta',
        en: 'IDR 300M - IDR 550M'
      }
    },
    landSize: {
      min: 70,
      max: 140,
      display: '70 - 140 m²'
    },
    facilities: {
      id: ['Masjid', 'Taman Bermain', 'Pos Keamanan', 'Akses Mudah'],
      en: ['Mosque', 'Playground', 'Security Post', 'Easy Access']
    },
    unitsSold: 260,
    totalUnits: 400
  },
  {
    id: 'grand-permata-ajung',
    name: 'Grand Permata Ajung',
    location: {
      id: 'Ajung, Jember',
      en: 'Ajung, Jember'
    },
    kecamatan: 'Ajung',
    description: {
      id: 'Perumahan dengan desain klasik elegan di kawasan Ajung yang berkembang pesat. Arsitektur timeless dengan sentuhan modern untuk hunian prestisius keluarga.',
      en: 'Housing with elegant classic design in rapidly developing Ajung area. Timeless architecture with modern touches for prestigious family residence.'
    },
    image: 'https://images.unsplash.com/photo-1763257708545-18addc8bef6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHw0fHxhZXJpYWwlMjB2aWV3JTIwcmVzaWRlbnRpYWx8ZW58MHx8fHwxNzcxOTM1NDQwfDA&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Residensial Premium',
      en: 'Premium Residential'
    },
    priceRange: {
      min: 480000000,
      max: 800000000,
      display: {
        id: 'Rp 480 Juta - Rp 800 Juta',
        en: 'IDR 480M - IDR 800M'
      }
    },
    landSize: {
      min: 90,
      max: 180,
      display: '90 - 180 m²'
    },
    facilities: {
      id: ['Taman Klasik', 'Gate Premium', 'Jalan Paving', 'Streetlight'],
      en: ['Classic Garden', 'Premium Gate', 'Paving Road', 'Streetlight']
    },
    unitsSold: 190,
    totalUnits: 320
  },
  {
    id: 'the-kayana',
    name: 'The Kayana',
    location: {
      id: 'Kaliwates, Jember',
      en: 'Kaliwates, Jember'
    },
    kecamatan: 'Kaliwates',
    description: {
      id: 'Premium residence dengan arsitektur kontemporer di pusat kota Jember. Hunian super premium dengan teknologi smart home dan design international standard.',
      en: 'Premium residence with contemporary architecture in Jember city center. Super premium housing with smart home technology and international standard design.'
    },
    image: 'https://images.unsplash.com/photo-1577485370453-90b0b6e29591?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxob3VzaW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc3MTkzNTQ0Nnww&ixlib=rb-4.1.0&q=85',
    featured: false,
    type: {
      id: 'Super Premium',
      en: 'Super Premium'
    },
    priceRange: {
      min: 900000000,
      max: 1800000000,
      display: {
        id: 'Rp 900 Juta - Rp 1,8 Miliar',
        en: 'IDR 900M - IDR 1.8B'
      }
    },
    landSize: {
      min: 150,
      max: 350,
      display: '150 - 350 m²'
    },
    facilities: {
      id: ['Smart Home', 'Private Pool', 'Home Theater', 'Sky Garden', 'Concierge Service'],
      en: ['Smart Home', 'Private Pool', 'Home Theater', 'Sky Garden', 'Concierge Service']
    },
    unitsSold: 65,
    totalUnits: 120
  }
]

// Helper functions
export const getProjectTypes = () => {
  const types = new Set()
  developments.forEach(dev => {
    types.add(dev.type.id)
  })
  return Array.from(types)
}

export const getKecamatan = () => {
  const kecamatan = new Set()
  developments.forEach(dev => {
    kecamatan.add(dev.kecamatan)
  })
  return Array.from(kecamatan).sort()
}

export const getFeaturedProject = () => {
  return developments.find(dev => dev.featured)
}

export const getProjectById = (id) => {
  return developments.find(dev => dev.id === id)
}
