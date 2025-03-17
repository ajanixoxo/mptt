import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

// Paths that require authentication
const protectedPaths = ["/admin/dashboard", "/admin/events", "/admin/users", "/admin/admins", "/admin/profile"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))

  if (isProtectedPath) {
    // Get token from cookies
    const token = request.cookies.get("admin-token")?.value

    // If no token, redirect to login
    if (!token) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(pathname))
      return NextResponse.redirect(url)
    }

    try {
      // Verify token
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")

      await jwtVerify(token, secret)

      // Token is valid, continue
      return NextResponse.next()
    } catch (error) {
      // Token is invalid, redirect to login
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(pathname))
      return NextResponse.redirect(url)
    }
  }

  // Not a protected path, continue
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

