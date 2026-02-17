import { NextResponse } from 'next/server';
import { findMany, insertOne, updateOne, deleteOne, COLLECTIONS } from '@/lib/db-helpers';
import { verifyToken } from '@/lib/auth';
import { ObjectId } from 'mongodb';

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
    const projects = await findMany(COLLECTIONS.HOUSING_PROJECTS, {});
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Get housing projects error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const isAuthenticated = await checkAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    const newProject = {
      name: data.name,
      location: data.location,
      description: data.description,
      image: data.image,
      units: data.units,
      available: data.available,
      facilities: data.facilities || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await insertOne(COLLECTIONS.HOUSING_PROJECTS, newProject);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Create housing project error:', error);
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
    const { _id, ...updateData } = data;

    if (!_id) {
      return NextResponse.json(
        { error: 'ID tidak valid' },
        { status: 400 }
      );
    }

    updateData.updatedAt = new Date();

    await updateOne(COLLECTIONS.HOUSING_PROJECTS, { _id: new ObjectId(_id) }, updateData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update housing project error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const isAuthenticated = await checkAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID tidak valid' },
        { status: 400 }
      );
    }

    await deleteOne(COLLECTIONS.HOUSING_PROJECTS, { _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete housing project error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}