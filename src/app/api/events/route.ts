import { NextResponse } from "next/server"
import prisma from "@/lib/prisma" // Import the shared instance

export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status") || "active" // Default to active events
    const limit = Number.parseInt(searchParams.get("limit") || "100") // Default to 100 events

    // Build query
    const where = status !== "all" ? { status } : {}

    // Get events
    const events = await prisma.event.findMany({
      where,
      orderBy: { eventDate: "asc" }, // Order by date ascending (upcoming first)
      take: limit,
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error("Get public events error:", error)
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

