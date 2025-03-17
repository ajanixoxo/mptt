import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"

const prisma = new PrismaClient()

// Helper function to get admin from token
async function getAdminFromToken(request: Request) {
  const cookie = await cookies()
  const token = cookie.get("admin-token")?.value

  if (!token) {
    return null
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || "your-secret-key")

    if (!decoded || typeof decoded !== "object") {
      return null
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    })

    return admin
  } catch (error) {
    return null
  }
}

// Get all events
export async function GET(request: Request) {
  try {
    // Check if user is authenticated and is an admin
    const admin = await getAdminFromToken(request)

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    // Build query
    const where = status && status !== "all" ? { status: status } : {}

    // Get events
    const events = await prisma.event.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { registrations: true },
        },
      },
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error("Get events error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// Create a new event
export async function POST(request: Request) {
  try {
    // Check if user is authenticated and is an admin
    const admin = await getAdminFromToken(request)

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Get event data from request
    const eventData = await request.json()

    // Create event
    const event = await prisma.event.create({
      data: {
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        eventDate: new Date(eventData.eventDate),
        isOnline: eventData.isOnline || false,
        status: eventData.status || "active",
        createdById: admin.id,
      },
    })

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error("Create event error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

