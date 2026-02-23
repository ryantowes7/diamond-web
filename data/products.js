/**
 * Product Types (House Types) Data
 * Diamond Group Website
 * Updated: Simplified to 2 categories - Subsidi & Komersil
 */

export const productTypes = [
  {
    id: 'rumah-subsidi',
    name: 'Rumah Subsidi',
    tagline: 'Hunian Berkualitas untuk Keluarga Indonesia',
    description: 'Program rumah subsidi dengan fasilitas lengkap dan harga terjangkau. Didukung oleh pemerintah untuk memberikan kesempatan kepada keluarga Indonesia memiliki hunian layak dengan cicilan ringan dan proses mudah.',
    specs: {
      buildingArea: '36 m²',
      landArea: '72 m²',
      bedrooms: '2',
      bathrooms: '1',
      facilities: ['Carport', 'Taman Depan', 'Ruang Tamu', 'Ruang Keluarga', 'Dapur', 'KM/WC']
    },
    benefits: [
      'DP Ringan mulai 1%',
      'Cicilan flat hingga 20 tahun',
      'Subsidi pemerintah',
      'Proses KPR mudah & cepat',
      'Lokasi strategis dekat fasilitas umum'
    ],
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxhZmZvcmRhYmxlJTIwaG91c2luZ3xlbnwwfHx8fDE3NzE4NjI2MDF8MA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'rumah-komersil',
    name: 'Rumah Komersil',
    tagline: 'Investasi Properti dengan Nilai Tinggi',
    description: 'Hunian premium dengan desain modern dan material berkualitas tinggi. Cocok untuk keluarga yang menginginkan kenyamanan maksimal dan nilai investasi properti jangka panjang dengan fasilitas eksklusif.',
    specs: {
      buildingArea: '70-120 m²',
      landArea: '120-200 m²',
      bedrooms: '3-4',
      bathrooms: '2-3',
      facilities: ['Carport 2 Mobil', 'Taman Luas', 'Ruang Tamu Premium', 'Ruang Keluarga', 'Dapur Modern', 'Kamar Mandi Dalam', 'Area Laundry', 'Smart Home Ready']
    },
    benefits: [
      'Desain arsitektur modern',
      'Material premium berkualitas',
      'Cluster eksklusif dengan keamanan 24 jam',
      'Fasilitas lengkap: kolam renang, taman, clubhouse',
      'ROI tinggi untuk investasi'
    ],
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE3NzE4NjI2MDV8MA&ixlib=rb-4.1.0&q=85'
  }
]
