import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

// MongoDB Connection
let client
let db

async function connectDB() {
  if (db) return db
  
  try {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME || 'diamond_group_cms')
    console.log('✅ MongoDB Connected')
    return db
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error)
    throw error
  }
}

// CMS Content Endpoints
export async function GET(request) {
  const { pathname } = new URL(request.url)
  
  try {
    // Get All CMS Content
    if (pathname === '/api/cms/content') {
      const database = await connectDB()
      const content = await database.collection('content').findOne({ type: 'main' })
      
      if (!content) {
        return NextResponse.json({
          hero: getDefaultHeroData(),
          news: getDefaultNewsData(),
          houseTypes: getDefaultHouseTypesData(),
          housingList: getDefaultHousingListData(),
          contact: getDefaultContactData()
        })
      }
      
      return NextResponse.json(content.data || {})
    }
    
    // Get Specific Section
    if (pathname.startsWith('/api/cms/section/')) {
      const section = pathname.split('/').pop()
      const database = await connectDB()
      const content = await database.collection('content').findOne({ type: 'main' })
      
      if (!content || !content.data || !content.data[section]) {
        return NextResponse.json({ error: 'Section not found' }, { status: 404 })
      }
      
      return NextResponse.json(content.data[section])
    }
    
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('GET Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  const { pathname } = new URL(request.url)
  
  try {
    // Save CMS Content
    if (pathname === '/api/cms/content') {
      const body = await request.json()
      const { section, data } = body
      
      const database = await connectDB()
      
      // Get current content
      let content = await database.collection('content').findOne({ type: 'main' })
      
      if (!content) {
        content = {
          type: 'main',
          data: {
            hero: getDefaultHeroData(),
            news: getDefaultNewsData(),
            houseTypes: getDefaultHouseTypesData(),
            housingList: getDefaultHousingListData(),
            contact: getDefaultContactData()
          },
          updatedAt: new Date()
        }
      }
      
      // Update specific section
      content.data[section] = data
      content.updatedAt = new Date()
      
      // Upsert to database
      await database.collection('content').updateOne(
        { type: 'main' },
        { $set: content },
        { upsert: true }
      )
      
      return NextResponse.json({ 
        success: true, 
        message: `${section} updated successfully`,
        data: content.data
      })
    }
    
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request) {
  const { pathname } = new URL(request.url)
  
  try {
    // Update Full Content
    if (pathname === '/api/cms/content') {
      const body = await request.json()
      
      const database = await connectDB()
      
      await database.collection('content').updateOne(
        { type: 'main' },
        { 
          $set: { 
            data: body,
            updatedAt: new Date()
          } 
        },
        { upsert: true }
      )
      
      return NextResponse.json({ 
        success: true, 
        message: 'Content updated successfully' 
      })
    }
    
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Default Data Functions
function getDefaultHeroData() {
  return {
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
  }
}

function getDefaultNewsData() {
  return {
    pinnedNews: {
      id: 1,
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
  }
}

function getDefaultHouseTypesData() {
  return [
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
  ]
}

function getDefaultHousingListData() {
  return [
    { id: 1, name: 'Diamond City', location: 'Jember Kota', units: '500+ Unit', image: 'https://images.unsplash.com/photo-1760535560073-efbdfd2b6a0f?w=600&q=80', status: 'Ready Stock' },
    { id: 2, name: 'Diamond Hills Residence', location: 'Jember Selatan', units: '300+ Unit', image: 'https://images.unsplash.com/photo-1769980111478-96f84e9a6919?w=600&q=80', status: 'Pre-Launching' },
    { id: 3, name: 'Diamond Garden', location: 'Jember Utara', units: '450+ Unit', image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?w=600&q=80', status: 'Ready Stock' },
    { id: 4, name: 'Diamond Valley', location: 'Jember Timur', units: '250+ Unit', image: 'https://images.unsplash.com/photo-1762944082416-bd1b98ccfcb1?w=600&q=80', status: 'Sold Out 90%' },
    { id: 5, name: 'Diamond Paradise', location: 'Jember Barat', units: '350+ Unit', image: 'https://images.unsplash.com/photo-1770064319741-bebbf0cb51e0?w=600&q=80', status: 'Ready Stock' },
    { id: 6, name: 'Diamond Residence', location: 'Jember Tengah', units: '400+ Unit', image: 'https://images.unsplash.com/photo-1762245464399-2db6f46c580a?w=600&q=80', status: 'Ready Stock' },
    { id: 7, name: 'Diamond Green', location: 'Tanggul', units: '280+ Unit', image: 'https://images.unsplash.com/photo-1760535560073-efbdfd2b6a0f?w=600&q=80', status: 'Coming Soon' },
    { id: 8, name: 'Diamond Park', location: 'Rambipuji', units: '320+ Unit', image: 'https://images.unsplash.com/photo-1769980111478-96f84e9a6919?w=600&q=80', status: 'Ready Stock' },
    { id: 9, name: 'Diamond Bay', location: 'Jember Pusat', units: '180+ Unit', image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?w=600&q=80', status: 'Ready Stock' }
  ]
}

function getDefaultContactData() {
  return {
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
  }
}