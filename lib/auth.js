import { SignJWT, jwtVerify } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET || 'diamond-group-secret-key-change-in-production';
const secret = new TextEncoder().encode(SECRET_KEY);

export async function createToken(payload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
  return token;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export function hashPassword(password) {
  // Simple hash for demo - in production use bcrypt or similar
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(password).digest('hex');
}