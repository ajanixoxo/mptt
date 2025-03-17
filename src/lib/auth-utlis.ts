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

export async function setAuthCookie(token: string) {
  const cookie = await cookies()
  cookie.set({
    name: 'admin-token',
    value: token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
  })
}

export  async  function getAuthCookie() {
  const cookie = await cookies()
  return cookie.get('admin-token')?.value
}

export  async  function removeAuthCookie() {
  const cookie = await cookies()
  cookie.delete('admin-token')
}