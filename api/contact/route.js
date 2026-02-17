import { NextResponse } from 'next/server';
import { findOne, replaceOne, COLLECTIONS } from '@/lib/db-helpers';
import { verifyToken } from '@/lib/auth';

async function checkAuth(request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.substring(7);
  const payload = await verifyToken(token);
  return !!payload;
}

export async function GET() {
  try {
    const contact = await findOne(COLLECTIONS.CONTACT, {});
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Data kontak tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Get contact error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const isAuthenticated = await checkAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    await replaceOne(COLLECTIONS.CONTACT, {}, {
      phone: data.phone,
      email: data.email,
      address: data.address,
      whatsapp: data.whatsapp,
      location: data.location,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update contact error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}