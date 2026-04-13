/**
 * Diamond City Project Data
 * Complete data for Diamond City detail page
 */

export const diamondCityData = {
  // Basic Info
  id: 'diamond-city',
  name: 'Diamond City',
  tagline: 'Kawasan Kota Mandiri Terpadu',
  slogan: 'Where Urban Living Meets Modern Convenience',
  
  location: {
    id: 'Patrang, Jember',
    en: 'Patrang, Jember'
  },
  
  type: {
    id: 'Mixed Development',
    en: 'Mixed Development'
  },
  
  status: {
    id: 'Tersedia',
    en: 'Available'
  },
  
  // Hero Section
  hero: {
    image: '/uploads/diamond-city.jpeg',
    height: '75vh', // 3/4 full screen
    overlay: true
  },
  
  // Profile/Overview
  profile: {
    title: {
      id: 'Tentang Diamond City',
      en: 'About Diamond City'
    },
    description: {
      id: `Diamond City adalah proyek mixed-use development terpadu yang menghadirkan konsep kota mandiri modern di jantung Patrang, Jember. Dengan luas area mencapai 50 hektar, Diamond City dirancang untuk menjadi pusat kehidupan urban yang lengkap dengan hunian, area komersial, dan fasilitas publik dalam satu lokasi strategis.

Konsep integrated township ini menggabungkan residential area dengan commercial district, menciptakan ekosistem yang memudahkan penghuni untuk beraktivitas tanpa harus keluar kawasan. Dilengkapi dengan infrastruktur modern, sistem keamanan 24 jam, dan pengelolaan kawasan profesional, Diamond City menjadi pilihan ideal untuk keluarga modern yang menginginkan kenyamanan dan efisiensi dalam satu tempat.

Lokasi strategis di kawasan Patrang yang sedang berkembang pesat memberikan aksesibilitas mudah ke berbagai titik penting di Jember, termasuk pusat kota, kampus, rumah sakit, dan pusat perbelanjaan. Diamond City bukan hanya hunian, tetapi investasi masa depan dengan potensi pertumbuhan nilai properti yang tinggi.`,
      en: `Diamond City is an integrated mixed-use development project that presents a modern self-sufficient city concept in the heart of Patrang, Jember. Covering an area of 50 hectares, Diamond City is designed to be a complete urban living center with residential, commercial areas, and public facilities in one strategic location.

This integrated township concept combines residential areas with a commercial district, creating an ecosystem that makes it easy for residents to carry out activities without having to leave the area. Equipped with modern infrastructure, 24-hour security systems, and professional area management, Diamond City is an ideal choice for modern families who want comfort and efficiency in one place.

The strategic location in the rapidly developing Patrang area provides easy accessibility to various important points in Jember, including the city center, campus, hospitals, and shopping centers. Diamond City is not just a residence, but a future investment with high property value growth potential.`
    },
    stats: [
      {
        label: { id: 'Luas Area', en: 'Total Area' },
        value: '50 Ha',
        icon: 'map'
      },
      {
        label: { id: 'Total Unit', en: 'Total Units' },
        value: '1,000+',
        icon: 'home'
      },
      {
        label: { id: 'Unit Terjual', en: 'Units Sold' },
        value: '380',
        icon: 'trending-up'
      },
      {
        label: { id: 'Fasilitas', en: 'Facilities' },
        value: '15+',
        icon: 'building'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ]
  },
  
  // Gallery
  gallery: [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      caption: { id: 'Gerbang Utama Diamond City', en: 'Diamond City Main Gate' },
      category: 'exterior'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      caption: { id: 'Area Komersial', en: 'Commercial Area' },
      category: 'facilities'
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      caption: { id: 'Residential Area', en: 'Residential Area' },
      category: 'residential'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      caption: { id: 'Taman & Jogging Track', en: 'Park & Jogging Track' },
      category: 'facilities'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      caption: { id: 'Cluster Premium', en: 'Premium Cluster' },
      category: 'residential'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
      caption: { id: 'Show Unit Interior', en: 'Show Unit Interior' },
      category: 'interior'
    }
  ],
  
  // Unit Types
  unitTypes: [
    {
      id: 'type-36',
      name: 'Tipe 36',
      type: { id: 'Rumah Subsidi', en: 'Subsidized House' },
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      price: {
        amount: 165000000,
        display: { id: 'Rp 165 Juta', en: 'IDR 165M' }
      },
      specs: {
        landSize: '72 m²',
        buildingSize: '36 m²',
        bedrooms: 2,
        bathrooms: 1,
        carport: 1,
        floors: 1
      },
      features: {
        id: [
          'Listrik 1300 Watt',
          'Air PDAM',
          'Carport',
          'Taman depan',
          'KM/WC dalam',
          'Dapur'
        ],
        en: [
          '1300 Watt Electricity',
          'PDAM Water',
          'Carport',
          'Front garden',
          'Bathroom inside',
          'Kitchen'
        ]
      },
      facilities: {
        id: ['Akses jalan lebar 6m', 'Dekat masjid', 'Area bermain anak', 'Pos keamanan'],
        en: ['6m wide road access', 'Near mosque', 'Children play area', 'Security post']
      },
      description: {
        id: 'Rumah subsidi dengan desain compact namun fungsional, cocok untuk keluarga muda yang ingin memiliki hunian pertama dengan harga terjangkau.',
        en: 'Subsidized house with compact yet functional design, suitable for young families who want to own their first home at an affordable price.'
      }
    },
    {
      id: 'type-45',
      name: 'Tipe 45',
      type: { id: 'Rumah Komersial', en: 'Commercial House' },
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      price: {
        amount: 350000000,
        display: { id: 'Rp 350 Juta', en: 'IDR 350M' }
      },
      specs: {
        landSize: '90 m²',
        buildingSize: '45 m²',
        bedrooms: 2,
        bathrooms: 1,
        carport: 1,
        floors: 1
      },
      features: {
        id: [
          'Listrik 2200 Watt',
          'Air PDAM + Sumur Bor',
          'Carport luas',
          'Taman depan & belakang',
          'KM/WC dalam',
          'Dapur + Ruang makan',
          'Ruang tamu luas'
        ],
        en: [
          '2200 Watt Electricity',
          'PDAM + Borehole Water',
          'Wide carport',
          'Front & back garden',
          'Inside bathroom',
          'Kitchen + Dining room',
          'Spacious living room'
        ]
      },
      facilities: {
        id: ['Akses jalan lebar 8m', 'Cluster berpagar', 'Taman cluster', 'Security 24 jam'],
        en: ['8m wide road access', 'Gated cluster', 'Cluster park', '24-hour security']
      },
      description: {
        id: 'Rumah dengan layout optimal untuk keluarga berkembang. Desain modern minimalis dengan ruang yang lebih luas dan fungsional.',
        en: 'House with optimal layout for growing families. Modern minimalist design with more spacious and functional rooms.'
      }
    },
    {
      id: 'type-60',
      name: 'Tipe 60',
      type: { id: 'Rumah Premium', en: 'Premium House' },
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      price: {
        amount: 650000000,
        display: { id: 'Rp 650 Juta', en: 'IDR 650M' }
      },
      specs: {
        landSize: '120 m²',
        buildingSize: '60 m²',
        bedrooms: 3,
        bathrooms: 2,
        carport: 2,
        floors: 1
      },
      features: {
        id: [
          'Listrik 3500 Watt',
          'Air PDAM + Sumur Bor',
          'Carport 2 mobil',
          'Taman luas depan & belakang',
          '2 KM/WC',
          'Dapur + Pantry',
          'Ruang keluarga',
          'Ruang tamu terpisah',
          'Kamar tidur utama dengan KM dalam'
        ],
        en: [
          '3500 Watt Electricity',
          'PDAM + Borehole Water',
          '2-car carport',
          'Large front & back garden',
          '2 Bathrooms',
          'Kitchen + Pantry',
          'Family room',
          'Separate living room',
          'Master bedroom with ensuite'
        ]
      },
      facilities: {
        id: ['Akses jalan lebar 10m', 'Cluster premium berpagar', 'Clubhouse', 'Swimming pool', 'Jogging track'],
        en: ['10m wide road access', 'Premium gated cluster', 'Clubhouse', 'Swimming pool', 'Jogging track']
      },
      description: {
        id: 'Rumah premium dengan desain mewah dan fasilitas lengkap. Cluster eksklusif dengan privasi maksimal dan akses ke fasilitas premium.',
        en: 'Premium house with luxurious design and complete facilities. Exclusive cluster with maximum privacy and access to premium facilities.'
      }
    }
  ],
  
  // Location
  location: {
    address: {
      id: 'Jl. Patrang Raya, Patrang, Jember, Jawa Timur 68118',
      en: 'Jl. Patrang Raya, Patrang, Jember, East Java 68118'
    },
    coordinates: {
      lat: -8.147435,
      lng: 113.676558
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4900.936208649571!2d113.67655827592164!3d-8.147435181602612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695e99160873d%3A0x37069fdd051b03cf!2sDIAMOND%20CITY!5e1!3m2!1sid!2sid!4v1771327302314!5m2!1sid!2sid',
    nearbyPlaces: [
      {
        name: { id: 'Pusat Kota Jember', en: 'Jember City Center' },
        distance: '3 km',
        time: { id: '8 menit', en: '8 minutes' },
        icon: 'building'
      },
      {
        name: { id: 'Universitas Jember', en: 'Jember University' },
        distance: '2 km',
        time: { id: '5 menit', en: '5 minutes' },
        icon: 'school'
      },
      {
        name: { id: 'RSUD Jember', en: 'Jember General Hospital' },
        distance: '4 km',
        time: { id: '10 menit', en: '10 minutes' },
        icon: 'hospital'
      },
      {
        name: { id: 'Terminal Tawang Alun', en: 'Tawang Alun Terminal' },
        distance: '5 km',
        time: { id: '12 menit', en: '12 minutes' },
        icon: 'bus'
      },
      {
        name: { id: 'Lippo Plaza Jember', en: 'Lippo Plaza Jember' },
        distance: '3.5 km',
        time: { id: '9 menit', en: '9 minutes' },
        icon: 'shopping'
      },
      {
        name: { id: 'Alun-alun Jember', en: 'Jember Town Square' },
        distance: '4 km',
        time: { id: '10 menit', en: '10 minutes' },
        icon: 'landmark'
      }
    ]
  },
  
  // Marketing Team
  marketingTeam: [
    {
      id: 1,
      name: 'Budi Santoso',
      role: { id: 'Manager Marketing', en: 'Marketing Manager' },
      phone: '+62 812 3456 7890',
      whatsapp: '6281234567890',
      email: 'budi.santoso@diamondgroup.id',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      specialty: { id: 'Spesialis Perumahan Premium & Subsidi', en: 'Premium & Subsidized Housing Specialist' }
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: { id: 'Senior Marketing Executive', en: 'Senior Marketing Executive' },
      phone: '+62 813 4567 8901',
      whatsapp: '6281345678901',
      email: 'siti.nurhaliza@diamondgroup.id',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      specialty: { id: 'Spesialis Investasi Properti', en: 'Property Investment Specialist' }
    },
    {
      id: 3,
      name: 'Ahmad Fauzi',
      role: { id: 'Marketing Executive', en: 'Marketing Executive' },
      phone: '+62 814 5678 9012',
      whatsapp: '6281456789012',
      email: 'ahmad.fauzi@diamondgroup.id',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      specialty: { id: 'Spesialis KPR & Pembiayaan', en: 'KPR & Financing Specialist' }
    }
  ],
  
  // Info & Resources
  info: [
    {
      id: 'brosur',
      title: { id: 'Download Brosur', en: 'Download Brochure' },
      description: { id: 'Informasi lengkap Diamond City', en: 'Complete Diamond City information' },
      icon: 'file-text',
      type: 'download',
      url: '/downloads/diamond-city-brochure.pdf',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
    },
    {
      id: 'promo-dp',
      title: { id: 'Promo DP 5%', en: '5% Down Payment Promo' },
      description: { id: 'Cicilan ringan hingga 20 tahun', en: 'Light installments up to 20 years' },
      icon: 'tag',
      type: 'promo',
      date: { id: 'Berlaku hingga 31 Maret 2025', en: 'Valid until March 31, 2025' },
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop'
    },
    {
      id: 'virtual-tour',
      title: { id: 'Virtual Tour 360°', en: '360° Virtual Tour' },
      description: { id: 'Jelajahi Diamond City secara virtual', en: 'Explore Diamond City virtually' },
      icon: 'video',
      type: 'link',
      url: '#virtual-tour',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
    },
    {
      id: 'kpr-info',
      title: { id: 'Simulasi KPR', en: 'KPR Simulation' },
      description: { id: 'Hitung cicilan bulanan Anda', en: 'Calculate your monthly installments' },
      icon: 'calculator',
      type: 'tool',
      url: '#kpr-calculator',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop'
    }
  ],
  
  // Facilities & Amenities
  facilities: [
    { name: { id: 'Mall', en: 'Mall' }, icon: 'shopping-bag', category: 'commercial' },
    { name: { id: 'Rumah Sakit', en: 'Hospital' }, icon: 'heart', category: 'health' },
    { name: { id: 'Sekolah', en: 'School' }, icon: 'book', category: 'education' },
    { name: { id: 'Hotel', en: 'Hotel' }, icon: 'building', category: 'commercial' },
    { name: { id: 'Convention Center', en: 'Convention Center' }, icon: 'briefcase', category: 'commercial' },
    { name: { id: 'Masjid', en: 'Mosque' }, icon: 'home', category: 'worship' },
    { name: { id: 'Taman & Jogging Track', en: 'Park & Jogging Track' }, icon: 'tree-pine', category: 'recreation' },
    { name: { id: 'Area Komersial', en: 'Commercial Area' }, icon: 'store', category: 'commercial' },
    { name: { id: 'Swimming Pool', en: 'Swimming Pool' }, icon: 'waves', category: 'recreation' },
    { name: { id: 'Security 24 Jam', en: '24/7 Security' }, icon: 'shield', category: 'security' },
    { name: { id: 'Akses Tol', en: 'Toll Access' }, icon: 'road', category: 'infrastructure' },
    { name: { id: 'Minimarket', en: 'Minimarket' }, icon: 'shopping', category: 'commercial' }
  ]
}