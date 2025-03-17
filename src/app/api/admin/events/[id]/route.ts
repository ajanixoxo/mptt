import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"

const prisma = new PrismaClient()

// Reusable function to check authentication
async function checkAuth(request: NextRequest) {
  try {
    const cookie = await cookies()
    const token = cookie.get("admin-token")?.value

    if (!token) {
      return { error: "Unauthorized", status: 401 }
    }

    const decoded = verify(token, process.env.JWT_SECRET || "your-secret-key")

    if (!decoded || typeof decoded !== "object") {
      return { error: "Invalid token", status: 401 }
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    })

    if (!admin) {
      return { error: "Forbidden - Admin access required", status: 403 }
    }

    return { admin }
  } catch (error) {
    console.error("Auth check error:", error)
    return { error: "Unauthorized", status: 401 }
  }
}

// Get a specific event
export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const auth = await checkAuth(request)
  if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status })

  try {
    const { params } = context

    const event = await prisma.event.findUnique({
      where: { id: params.id },
      include: {
        registrations: { orderBy: { createdAt: "desc" } },
        createdBy: { select: { name: true, email: true } },
      },
    })

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 })
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error("Get event error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// Update an event
export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  const auth = await checkAuth(request)
  if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status })

  try {
    const { params } = context
    const eventData = await request.json()

    const event = await prisma.event.update({
      where: { id: params.id },
      data: {
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        eventDate: eventData.eventDate ? new Date(eventData.eventDate) : undefined,
        isOnline: eventData.isOnline,
        status: eventData.status,
      },
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error("Update event error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// Delete an event
export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  const auth = await checkAuth(request)
  if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status })

  try {
    const { params } = context

    await prisma.event.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: "Event deleted successfully" })
  } catch (error) {
    console.error("Delete event error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
