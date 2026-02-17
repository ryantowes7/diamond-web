import { NextResponse } from 'next/server';
import { replaceOne, insertOne, COLLECTIONS } from '@/lib/db-helpers';
import { hashPassword } from '@/lib/auth';
import { companyInfo, houseTypes, housingProjects } from '@/lib/data';

export async function POST(request) {
  try {
    const { secret } = await request.json();

    // Simple protection - change this in production
    if (secret !== 'diamond-seed-2025') {
      return NextResponse.json(
        { error: 'Secret key tidak valid' },
        { status: 403 }
      );
    }

    // 1. Create admin user
    const adminUser = {
      username: 'admin',
      password: hashPassword('admin123'), // Change this in production!
      name: 'Administrator',
      createdAt: new Date(),
    };
    await replaceOne(COLLECTIONS.ADMIN_USERS, { username: 'admin' }, adminUser);

    // 2. Seed company info
    const company = {
      name: companyInfo.name,
      tagline: companyInfo.tagline,
      description: companyInfo.description,
      updatedAt: new Date(),
    };
    await replaceOne(COLLECTIONS.COMPANY, {}, company);

    // 3. Seed hero content
    const hero = {
      headline: 'Membangun Hunian Impian, Mewujudkan Masa Depan Gemilang',
      subheadline: 'Developer properti terpercaya dengan 10+ perumahan berkualitas tinggi di berbagai lokasi strategis',
      backgroundImage: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc',
      ctaText: 'Lihat Perumahan',
      stats: [
        { label: 'Perumahan', value: '10+' },
        { label: 'Unit Terjual', value: '1500+' },
        { label: 'Tahun Pengalaman', value: '15+' },
      ],
      updatedAt: new Date(),
    };
    await replaceOne(COLLECTIONS.HERO, {}, hero);

    // 4. Seed contact info
    const contact = {
      phone: companyInfo.contact.phone,
      email: companyInfo.contact.email,
      address: companyInfo.contact.address,
      whatsapp: companyInfo.contact.whatsapp,
      location: companyInfo.location,
      updatedAt: new Date(),
    };
    await replaceOne(COLLECTIONS.CONTACT, {}, contact);

    // 5. Seed house types
    const collection = await import('@/lib/db-helpers').then(m => m.getCollection(COLLECTIONS.HOUSE_TYPES));
    await collection.deleteMany({}); // Clear existing
    
    for (const house of houseTypes) {
      const { id, ...houseData } = house;
      await insertOne(COLLECTIONS.HOUSE_TYPES, {
        ...houseData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // 6. Seed housing projects
    const projectsCollection = await import('@/lib/db-helpers').then(m => m.getCollection(COLLECTIONS.HOUSING_PROJECTS));
    await projectsCollection.deleteMany({}); // Clear existing
    
    for (const project of housingProjects) {
      const { id, ...projectData } = project;
      await insertOne(COLLECTIONS.HOUSING_PROJECTS, {
        ...projectData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Database berhasil di-seed!',
      info: {
        admin: { username: 'admin', password: 'admin123' },
        collections: {
          admin_users: 1,
          company: 1,
          hero: 1,
          contact: 1,
          house_types: houseTypes.length,
          housing_projects: housingProjects.length,
        },
      },
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan: ' + error.message },
      { status: 500 }
    );
  }
}