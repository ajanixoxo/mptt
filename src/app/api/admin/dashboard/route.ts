import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

const prisma = new PrismaClient()

export async function GET() {
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

    // Get dashboard data
    const [activeEventsCount, closedEventsCount, totalRegistrationsCount, recentEvents, recentRegistrations] =
      await Promise.all([
        // Count active events
        prisma.event.count({
          where: { status: "active" },
        }),

        // Count closed events
        prisma.event.count({
          where: { status: "closed" },
        }),

        // Count total registrations
        prisma.registration.count(),

        // Get recent events
        prisma.event.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: {
            _count: {
              select: { registrations: true },
            },
          },
        }),

        // Get recent registrations
        prisma.registration.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: {
            event: {
              select: { title: true },
            },
          },
        }),
      ])

    return NextResponse.json({
      activeEvents: activeEventsCount,
      closedEvents: closedEventsCount,
      totalRegistrations: totalRegistrationsCount,
      recentEvents,
      recentUsers: recentRegistrations,
    })
  } catch (error) {
    console.error("Dashboard API error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

