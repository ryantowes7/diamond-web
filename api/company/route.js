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
    const company = await findOne(COLLECTIONS.COMPANY, {});
    
    if (!company) {
      return NextResponse.json(
        { error: 'Data company tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(company);
  } catch (error) {
    console.error('Get company error:', error);
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
    
    await replaceOne(COLLECTIONS.COMPANY, {}, {
      name: data.name,
      tagline: data.tagline,
      description: data.description,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update company error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}