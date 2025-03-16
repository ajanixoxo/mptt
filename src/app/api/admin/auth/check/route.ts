import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Get token from cookies
    const token = cookies().get("admin-token")?.value

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Verify token
    const decoded = verify(token, process.env.JWT_SECRET || "your-secret-key")

    if (!decoded || typeof decoded !== "object") {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    // Check if admin exists
    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    })

    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 401 })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
}

