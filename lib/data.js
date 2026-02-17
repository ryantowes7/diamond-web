// Mock data untuk Diamond Group

export const companyInfo = {
  name: 'Diamond Group',
  tagline: 'Membangun Hunian Impian, Mewujudkan Masa Depan Gemilang',
  description: 'Developer properti terpercaya dengan 10+ perumahan berkualitas tinggi di berbagai lokasi strategis.',
  contact: {
    phone: '+62 821-1234-5678',
    email: 'info@diamondgroup.co.id',
    address: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan 12190',
    whatsapp: '6282112345678'
  },
  location: {
    lat: -6.2088,
    lng: 106.8456
  }
};

export const houseTypes = [
  {
    id: 'type-1',
    name: 'Emerald Type 36',
    buildingArea: '36 m²',
    landArea: '72 m²',
    bedrooms: 2,
    bathrooms: 1,
    price: 'Rp 450 Juta',
    image: 'https://images.unsplash.com/photo-1740479948571-3216df03c364',
    features: ['Carport', 'Taman depan', 'Listrik 1300W']
  },
  {
    id: 'type-2',
    name: 'Ruby Type 45',
    buildingArea: '45 m²',
    landArea: '90 m²',
    bedrooms: 2,
    bathrooms: 1,
    price: 'Rp 550 Juta',
    image: 'https://images.unsplash.com/photo-1740479948645-3eb39a64e843',
    features: ['Carport', 'Taman depan & belakang', 'Listrik 2200W']
  },
  {
    id: 'type-3',
    name: 'Sapphire Type 60',
    buildingArea: '60 m²',
    landArea: '120 m²',
    bedrooms: 3,
    bathrooms: 2,
    price: 'Rp 750 Juta',
    image: 'https://images.unsplash.com/photo-1758448756880-01dbaf85597d',
    features: ['Garasi', 'Taman luas', 'Listrik 2200W', 'Water heater']
  },
  {
    id: 'type-4',
    name: 'Diamond Type 90',
    buildingArea: '90 m²',
    landArea: '150 m²',
    bedrooms: 3,
    bathrooms: 2,
    price: 'Rp 1.2 Miliar',
    image: 'https://images.unsplash.com/photo-1758448501014-3a6068fb9d51',
    features: ['Garasi 2 mobil', 'Taman luas', 'Listrik 3500W', 'Smart home ready']
  },
  {
    id: 'type-5',
    name: 'Platinum Type 120',
    buildingArea: '120 m²',
    landArea: '200 m²',
    bedrooms: 4,
    bathrooms: 3,
    price: 'Rp 1.8 Miliar',
    image: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07',
    features: ['Garasi 2 mobil', 'Kolam renang mini', 'Listrik 5500W', 'Full smart home']
  }
];

export const housingProjects = [
  {
    id: 'project-1',
    name: 'Diamond Hills Residence',
    location: 'BSD City, Tangerang',
    description: 'Perumahan premium dengan konsep modern tropical di kawasan BSD',
    image: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc',
    units: 150,
    available: 45,
    facilities: ['Clubhouse', 'Swimming Pool', '24/7 Security', 'Jogging Track']
  },
  {
    id: 'project-2',
    name: 'Emerald Garden',
    location: 'Cibubur, Jakarta Timur',
    description: 'Hunian asri dengan konsep green living di area Cibubur',
    image: 'https://images.unsplash.com/photo-1505522634513-bdbe8c121455',
    units: 200,
    available: 67,
    facilities: ['Taman bermain', 'Mini market', 'Security', 'One gate system']
  },
  {
    id: 'project-3',
    name: 'Ruby Heights',
    location: 'Bekasi Selatan',
    description: 'Perumahan strategis dekat dengan pusat kota dan akses tol',
    image: 'https://images.unsplash.com/photo-1740479948571-3216df03c364',
    units: 180,
    available: 52,
    facilities: ['Masjid', 'Sport center', 'Security 24 jam', 'Smart card access']
  },
  {
    id: 'project-4',
    name: 'Sapphire Valley',
    location: 'Sentul City, Bogor',
    description: 'Hunian eksklusif dengan view pegunungan dan udara sejuk',
    image: 'https://images.unsplash.com/photo-1740479948645-3eb39a64e843',
    units: 120,
    available: 38,
    facilities: ['Clubhouse', 'Kolam renang', 'Taman luas', 'Spot foto']
  },
  {
    id: 'project-5',
    name: 'Golden Park Residence',
    location: 'Depok',
    description: 'Perumahan modern dengan fasilitas lengkap di kawasan Depok',
    image: 'https://images.unsplash.com/photo-1758448756880-01dbaf85597d',
    units: 160,
    available: 44,
    facilities: ['Playground', 'Gym', 'Security', 'Minimarket']
  },
  {
    id: 'project-6',
    name: 'Silver Springs',
    location: 'Karawang',
    description: 'Investasi properti terbaik dekat kawasan industri Karawang',
    image: 'https://images.unsplash.com/photo-1758448501014-3a6068fb9d51',
    units: 140,
    available: 56,
    facilities: ['Security', 'Masjid', 'Taman', 'Akses tol']
  },
  {
    id: 'project-7',
    name: 'Crystal Bay',
    location: 'Tangerang Selatan',
    description: 'Hunian nyaman dengan konsep modern minimalis',
    image: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07',
    units: 190,
    available: 63,
    facilities: ['Kolam renang', 'Jogging track', 'Security', 'Wifi area']
  },
  {
    id: 'project-8',
    name: 'Jade Garden Estate',
    location: 'Serpong, Tangerang',
    description: 'Perumahan hijau dengan konsep sustainable living',
    image: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc',
    units: 175,
    available: 49,
    facilities: ['Taman luas', 'Kolam renang', 'Security', 'Sport club']
  },
  {
    id: 'project-9',
    name: 'Platinum Residence',
    location: 'Cikarang',
    description: 'Hunian strategis untuk keluarga modern di Cikarang',
    image: 'https://images.unsplash.com/photo-1505522634513-bdbe8c121455',
    units: 165,
    available: 41,
    facilities: ['Clubhouse', 'Playground', '24/7 Security', 'Commercial area']
  },
  {
    id: 'project-10',
    name: 'Imperial Gardens',
    location: 'Bekasi Barat',
    description: 'Perumahan eksklusif dengan fasilitas resort di Bekasi',
    image: 'https://images.unsplash.com/photo-1740479948571-3216df03c364',
    units: 130,
    available: 35,
    facilities: ['Resort pool', 'Cafe', 'Security', 'Kids club']
  }
];