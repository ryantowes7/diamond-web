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
    const hero = await findOne(COLLECTIONS.HERO, {});
    
    if (!hero) {
      return NextResponse.json(
        { error: 'Data hero tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(hero);
  } catch (error) {
    console.error('Get hero error:', error);
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
    
    await replaceOne(COLLECTIONS.HERO, {}, {
      headline: data.headline,
      subheadline: data.subheadline,
      backgroundImage: data.backgroundImage,
      ctaText: data.ctaText,
      stats: data.stats,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update hero error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}