/**
 * Diamond City Events & Activities
 * Event dan aktivitas khusus Diamond City
 */

export const diamondCityEvents = [
  {
    id: 'dc-event-1',
    title: {
      id: 'Open House Diamond City - Agustus 2025',
      en: 'Diamond City Open House - August 2025'
    },
    description: {
      id: 'Kunjungi unit show house dan ready stock kami. Dapatkan diskon spesial hingga Rp 50 juta dan gratis biaya notaris untuk 10 pembeli pertama!',
      en: 'Visit our show house and ready stock units. Get special discount up to Rp 50 million and free notary fees for the first 10 buyers!'
    },
    date: '2025-08-15',
    location: {
      id: 'Diamond City Sales Office, Patrang',
      en: 'Diamond City Sales Office, Patrang'
    },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    type: {
      id: 'Open House',
      en: 'Open House'
    },
    status: 'upcoming'
  },
  {
    id: 'dc-event-2',
    title: {
      id: 'Perayaan HUT RI ke-80 Diamond City',
      en: 'Diamond City 80th Independence Day Celebration'
    },
    description: {
      id: 'Bergabunglah dalam perayaan kemerdekaan bersama keluarga Diamond City. Ada lomba, doorprize, dan penampilan artis lokal!',
      en: 'Join the independence celebration with Diamond City family. There are competitions, doorprizes, and local artist performances!'
    },
    date: '2025-08-17',
    location: {
      id: 'Taman Central Diamond City',
      en: 'Diamond City Central Park'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    type: {
      id: 'Perayaan',
      en: 'Celebration'
    },
    status: 'upcoming'
  },
  {
    id: 'dc-event-3',
    title: {
      id: 'Senam Sehat Bersama Komunitas Diamond City',
      en: 'Healthy Gymnastics with Diamond City Community'
    },
    description: {
      id: 'Aktivitas rutin setiap Minggu pagi untuk menjaga kesehatan dan kebersamaan penghuni Diamond City. Gratis untuk umum!',
      en: 'Regular activity every Sunday morning to maintain health and togetherness of Diamond City residents. Free for public!'
    },
    date: '2025-08-10',
    location: {
      id: 'Jogging Track Diamond City',
      en: 'Diamond City Jogging Track'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
    type: {
      id: 'Aktivitas Rutin',
      en: 'Regular Activity'
    },
    status: 'ongoing'
  },
  {
    id: 'dc-event-4',
    title: {
      id: 'Seminar KPR & Investasi Properti',
      en: 'KPR & Property Investment Seminar'
    },
    description: {
      id: 'Pelajari cara mendapatkan KPR dengan bunga rendah dan strategi investasi properti yang menguntungkan. Gratis konsultasi!',
      en: 'Learn how to get KPR with low interest and profitable property investment strategies. Free consultation!'
    },
    date: '2025-08-20',
    location: {
      id: 'Diamond City Clubhouse',
      en: 'Diamond City Clubhouse'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    type: {
      id: 'Seminar',
      en: 'Seminar'
    },
    status: 'upcoming'
  },
  {
    id: 'dc-event-5',
    title: {
      id: 'Festival Kuliner Diamond City',
      en: 'Diamond City Culinary Festival'
    },
    description: {
      id: 'Nikmati berbagai kuliner nusantara di area komersial Diamond City. Ada diskon hingga 50% dari berbagai tenant!',
      en: 'Enjoy various Indonesian cuisines at Diamond City commercial area. Get discounts up to 50% from various tenants!'
    },
    date: '2025-08-25',
    location: {
      id: 'Area Komersial Diamond City',
      en: 'Diamond City Commercial Area'
    },
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=800&fit=crop',
    type: {
      id: 'Festival',
      en: 'Festival'
    },
    status: 'upcoming'
  }
]

// Format event date helper
export const formatEventDate = (dateString, locale = 'id') => {
  const date = new Date(dateString)
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth()
  
  const monthsID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des']
  const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const monthName = locale === 'id' ? monthsID[month] : monthsEN[month]
  
  return `${day} ${monthName} ${year}`
}