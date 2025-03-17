import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

const prisma = new PrismaClient()

// Get a specific event
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    if (!session.user.email) {
      return NextResponse.json({ message: "Unauthorized - Missing email" }, { status: 401 })
    }
    // Check if user is an admin
    const admin = await prisma.admin.findFirst({
      where: {
        email: session.user.email,
      },
    })

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized - Admin access required" }, { status: 403 })
    }

    // Get event
    const event = await prisma.event.findUnique({
      where: { id: params.id },
      include: {
        registrations: {
          orderBy: { createdAt: "desc" },
        },
        createdBy: {
          select: { name: true, email: true },
        },
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
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Check if user is an admin
    const admin = await prisma.admin.findFirst({
      where: {
        email: session.user.email,
      },
    })

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized - Admin access required" }, { status: 403 })
    }

    // Get event data from request
    const eventData = await request.json()

    // Update event
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
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Check if user is an admin
    const admin = await prisma.admin.findFirst({
      where: {
        email: session.user.email,
      },
    })

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized - Admin access required" }, { status: 403 })
    }

    // Delete event (this will cascade delete registrations due to our schema)
    await prisma.event.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: "Event deleted successfully" })
  } catch (error) {
    console.error("Delete event error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

