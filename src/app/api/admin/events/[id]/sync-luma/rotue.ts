import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import prisma from "@/lib/prisma"
import { scrapeLumaEvent } from "@/lib/luma_scraper/route"

// Reusable function to check authentication
async function getAdminFromToken() {
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

    if (!admin) {
      return null
    }

    return admin
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function POST(request: Request, context: { params: { id: string } }) {
  try {
    // Check if user is authenticated and is an admin
    const admin = await getAdminFromToken()

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = context.params

    // Get the event
    const event = await prisma.event.findUnique({
      where: { id },
    })

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 })
    }

    if (!event.thirdPartyLink) {
      return NextResponse.json({ message: "Event is not linked to Luma" }, { status: 400 })
    }

    // Scrape updated event data from Luma
    const eventData = await scrapeLumaEvent(event.thirdPartyLink)

    // Format the event date for database storage
    let eventDate = null
    if (eventData.eventDate) {
      try {
        // Try to create a date from the eventDate
        const dateStr = eventData.eventDate
        const timeStr = eventData.eventTime || "00:00"

        // Combine date and time
        const dateTime = `${dateStr}T${timeStr}`
        eventDate = new Date(dateTime)

        // Check if the date is valid
        if (isNaN(eventDate.getTime())) {
          eventDate = null
        }
      } catch (e) {
        console.error("Error parsing event date:", e)
        eventDate = null
      }
    }

    // Update event in database
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        eventDate: eventDate,
        isOnline: eventData.isOnline,
      },
    })

    return NextResponse.json(
      {
        message: "Event synced successfully",
        event: updatedEvent,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Sync Luma event error:", error)
    return NextResponse.json(
      {
        message: "Failed to sync event",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

