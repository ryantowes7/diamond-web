/**
 * CMS Data Helper Functions (Client-Side)
 * Diamond Group - Decap CMS Integration
 */

/**
 * Fetch Home Content from CMS
 * This runs on client-side to get latest CMS data
 */

export async function getHomeContent() {
  try {
    const response = await fetch('/content/home.json', {
      cache: 'no-store', // Always get fresh data
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!response.ok) {
      console.warn('home.json not found, using fallback data')
      return getFallbackHomeData()
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching home.json:', error)
    return getFallbackHomeData()
  }
}

/**
 * Fetch Site Settings from CMS
 */
export async function getSiteSettings() {
  try {
    const response = await fetch('/content/settings.json', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!response.ok) {
      console.warn('settings.json not found, using fallback')
      return getFallbackSettings()
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching settings.json:', error)
    return getFallbackSettings()
  }
}

/**
 * Fallback data if CMS files don't exist
 */
function getFallbackHomeData() {
  return {
    hero: {
      videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-residential-neighborhood-5011/1080p.mp4',
      fallbackImage: 'https://images.unsplash.com/photo-1770665567850-4f5aa4ab7508',
      id: {
        headline: 'Membangun Hunian Menumbuhkan Harapan',
        subheadline: 'Developer properti terpercaya dengan 9 kawasan Perumahan berkualitas di Jember',
        ctas: [
          { label: 'Jelajahi Proyek Kami', href: '#proyek', variant: 'primary' },
          { label: 'Profil Perusahaan', href: '#tentang', variant: 'secondary' }
        ]
      },
      en: {
        headline: 'Building Homes, Nurturing Hope',
        subheadline: 'Trusted property developer with 9 quality residential areas in Jember',
        ctas: [
          { label: 'Explore Our Projects', href: '#proyek', variant: 'primary' },
          { label: 'Company Profile', href: '#tentang', variant: 'secondary' }
        ]
      }
    },
    corporate: {
      headline: {
        id: 'Membangun Hunian Menumbuhkan Harapan',
        en: 'Building Homes, Growing Hope'
      },
      description: {
        id: 'Dari hunian, Diamond Group secara konsisten mendorong inovasi kuat untuk membangun masa depan yang lebih baik.',
        en: 'From housing, Diamond Group consistently drives strong innovation to build a better future.'
      },
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
        'https://images.unsplash.com/photo-1564156280315-1d42b4651629?w=800&q=80',
        'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=800&q=80'
      ],
      values: {
        id: [
          { icon: 'Shield', label: 'Integritas' },
          { icon: 'Heart', label: 'Loyalitas' },
          { icon: 'Lightbulb', label: 'Inovasi' }
        ],
        en: [
          { icon: 'Shield', label: 'Integrity' },
          { icon: 'Heart', label: 'Loyalty' },
          { icon: 'Lightbulb', label: 'Innovation' }
        ]
      }
    },
    statistics: {
      id: [
        { label: 'Tahun Pengalaman', value: 10, suffix: '+' },
        { label: 'Kawasan Perumahan', value: 9, suffix: '' },
        { label: 'Unit Terjual', value: 2500, suffix: '+' }
      ],
      en: [
        { label: 'Years of Experience', value: 10, suffix: '+' },
        { label: 'Housing Areas', value: 9, suffix: '' },
        { label: 'Units Sold', value: 2500, suffix: '+' }
      ]
    },
    news: {
      title: {
        id: 'Berita & Update',
        en: 'News & Updates'
      },
      articles: []
    },
    events: {
      title: {
        id: 'Event & Aktivitas',
        en: 'Events & Activities'
      },
      list: []
    }
  }
}

function getFallbackSettings() {
  return {
    siteTitle: 'Diamond Group - Developer Properti Terpercaya Indonesia',
    siteDescription: 'Developer properti nasional dengan 9 kawasan perumahan berkualitas di Jember.',
    contactEmail: 'info@diamondgroup.co.id',
    contactPhone: '+62 331 123456',
    whatsappNumber: '6281234567890',
    address: 'Jl. Raya Jember No. 123, Jember, Jawa Timur 68100, Indonesia',
    socialMedia: {
      facebook: 'https://facebook.com/diamondgroup',
      instagram: 'https://instagram.com/diamondgroup',
      twitter: 'https://twitter.com/diamondgroup',
      linkedin: 'https://linkedin.com/company/diamondgroup',
      youtube: 'https://youtube.com/@diamondgroup'
    }
  }
}