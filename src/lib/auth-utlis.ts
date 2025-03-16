// src/lib/auth-utils.ts
import { sign, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export function createToken(payload: any) {
  return sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

export function verifyToken(token: string) {
  try {
    return verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export function setAuthCookie(token: string) {
  cookies().set({
    name: 'admin-token',
    value: token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
  })
}

export function getAuthCookie() {
  return cookies().get('admin-token')?.value
}

export function removeAuthCookie() {
  cookies().delete('admin-token')
}