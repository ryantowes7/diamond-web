/**
 * CMS Data Utility Functions
 * Diamond Group - Decap CMS Integration
 */

import fs from 'fs'
import path from 'path'

/**
 * Get Home Page Content from CMS
 */
export function getHomeContent() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'content', 'home.json')
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn('home.json not found, using fallback data')
      return getFallbackHomeData()
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error reading home.json:', error)
    return getFallbackHomeData()
  }
}

/**
 * Get Site Settings from CMS
 */
export function getSiteSettings() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'content', 'settings.json')
    
    if (!fs.existsSync(filePath)) {
      console.warn('settings.json not found, using fallback')
      return getFallbackSettings()
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error reading settings.json:', error)
    return getFallbackSettings()
  }
}

/**
 * Fallback data if JSON files don't exist (uses original data structure)
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
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        'https://images.unsplash.com/photo-1564156280315-1d42b4651629',
        'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb'
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
        { label: 'Tahun', value: 10, suffix: '+' },
        { label: 'Perumahan', value: 9, suffix: '' },
        { label: 'Unit', value: 2500, suffix: '+' }
      ],
      en: [
        { label: 'Years', value: 10, suffix: '+' },
        { label: 'Housing', value: 9, suffix: '' },
        { label: 'Units', value: 2500, suffix: '+' }
      ]
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
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      youtube: ''
    }
  }
}