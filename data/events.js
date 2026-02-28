/**
 * Events & Activities Data - Bilingual
 * Diamond Group Website
 */

export const events = [
  {
    id: 'event-1',
    title: {
      id: 'Grand Launching The Kayana',
      en: 'Grand Launching The Kayana'
    },
    description: {
      id: 'Peluncuran kawasan super premium dengan teknologi smart home dan fasilitas eksklusif. Dapatkan promo spesial dan hadiah menarik!',
      en: 'Launch of super premium area with smart home technology and exclusive facilities. Get special promos and attractive prizes!'
    },
    date: '2025-09-15',
    location: {
      id: 'The Kayana Sales Gallery, Kaliwates',
      en: 'The Kayana Sales Gallery, Kaliwates'
    },
    image: 'https://images.unsplash.com/photo-1701589212546-2a1bcd94c5af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxwcm9wZXJ0eSUyMGxhdW5jaHxlbnwwfHx8fDE3NzIyNzc3MTR8MA&ixlib=rb-4.1.0&q=85',
    type: {
      id: 'Peluncuran Proyek',
      en: 'Project Launch'
    },
    status: 'upcoming'
  },
  {
    id: 'event-2',
    title: {
      id: 'Diamond Property Expo 2025',
      en: 'Diamond Property Expo 2025'
    },
    description: {
      id: 'Pameran properti terbesar dengan penawaran khusus untuk semua proyek Diamond Group. DP 0%, cicilan ringan, dan bonus menarik!',
      en: 'The biggest property exhibition with special offers for all Diamond Group projects. 0% down payment, easy installments, and attractive bonuses!'
    },
    date: '2025-08-20',
    location: {
      id: 'Jember Convention Center',
      en: 'Jember Convention Center'
    },
    image: 'https://images.unsplash.com/photo-1760963719896-381873e1009c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxwcm9wZXJ0eSUyMGV4aGliaXRpb258ZW58MHx8fHwxNzcyMjc3NzA2fDA&ixlib=rb-4.1.0&q=85',
    type: {
      id: 'Pameran',
      en: 'Exhibition'
    },
    status: 'upcoming'
  },
  {
    id: 'event-3',
    title: {
      id: 'Open House Diamond Cluster',
      en: 'Open House Diamond Cluster'
    },
    description: {
      id: 'Kunjungi rumah contoh dan unit ready stock kami. Konsultasi gratis dengan tim properti expert dan dapatkan harga spesial hari ini!',
      en: 'Visit our show houses and ready stock units. Free consultation with property expert team and get special prices today!'
    },
    date: '2025-08-10',
    location: {
      id: 'Diamond Cluster Griya Mangli, Kaliwates',
      en: 'Diamond Cluster Griya Mangli, Kaliwates'
    },
    image: 'https://images.unsplash.com/photo-1771189255245-225dcea3f652?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGV4aGliaXRpb258ZW58MHx8fHwxNzcyMjc3NzA2fDA&ixlib=rb-4.1.0&q=85',
    type: {
      id: 'Open House',
      en: 'Open House'
    },
    status: 'ongoing'
  },
  {
    id: 'event-4',
    title: {
      id: 'Webinar Investasi Properti 2025',
      en: 'Property Investment Webinar 2025'
    },
    description: {
      id: 'Pelajari strategi investasi properti yang menguntungkan bersama para ahli. Gratis untuk umum, dapatkan e-certificate!',
      en: 'Learn profitable property investment strategies with experts. Free for public, get e-certificate!'
    },
    date: '2025-08-05',
    location: {
      id: 'Online via Zoom',
      en: 'Online via Zoom'
    },
    image: 'https://images.unsplash.com/photo-1701589212546-2a1bcd94c5af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxwcm9wZXJ0eSUyMGxhdW5jaHxlbnwwfHx8fDE3NzIyNzc3MTR8MA&ixlib=rb-4.1.0&q=85',
    type: {
      id: 'Webinar',
      en: 'Webinar'
    },
    status: 'upcoming'
  }
]

// Helper function to format date
export const formatEventDate = (dateString, locale = 'id') => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
