import { NextResponse } from 'next/server';
import { findOne, COLLECTIONS } from '@/lib/db-helpers';
import { createToken, hashPassword } from '@/lib/auth';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username dan password harus diisi' },
        { status: 400 }
      );
    }

    // Find admin user
    const admin = await findOne(COLLECTIONS.ADMIN_USERS, { username });

    if (!admin) {
      return NextResponse.json(
        { error: 'Username atau password salah' },
        { status: 401 }
      );
    }

    // Check password
    const hashedPassword = hashPassword(password);
    if (admin.password !== hashedPassword) {
      return NextResponse.json(
        { error: 'Username atau password salah' },
        { status: 401 }
      );
    }

    // Create token
    const token = await createToken({
      userId: admin._id.toString(),
      username: admin.username,
    });

    return NextResponse.json({
      success: true,
      token,
      user: {
        username: admin.username,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}