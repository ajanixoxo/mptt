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

export async function POST(request: Request) {
  try {
    // Check if user is authenticated and is an admin
    const admin = await getAdminFromToken()

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { lumaUrl } = await request.json()

    if (!lumaUrl) {
      return NextResponse.json({ message: "Luma URL is required" }, { status: 400 })
    }

    // Scrape event data from Luma
    const eventData = await scrapeLumaEvent(lumaUrl)

    // Check if event with this third-party ID already exists
    const existingEvent = await prisma.event.findFirst({
      where: { thirdPartyEventId: eventData.thirdPartyEventId },
    })

    if (existingEvent) {
      return NextResponse.json(
        {
          message: "Event already imported",
          event: existingEvent,
        },
        { status: 200 },
      )
    }

    // Format the event date for database storage
    let eventDate = null
    if (eventData.eventDate) {
      try {
        // Try to create a date from whatever eventDate is
        eventDate = new Date(eventData.eventDate)
        // Check if the date is valid
        if (isNaN(eventDate.getTime())) {
          eventDate = null
        }
      } catch (e) {
        console.error("Error parsing event date:", e)
        eventDate = null
      }
    }

    // Create new event in database
    const event = await prisma.event.create({
      data: {
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        eventDate: eventDate,
        isOnline: eventData.isOnline,
        status: "active",
        thirdPartyLink: eventData.thirdPartyLink,
        thirdPartyEventId: eventData.thirdPartyEventId,
        createdById: admin.id,
      },
    })

    return NextResponse.json(
      {
        message: "Event imported successfully",
        event,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Import Luma event error:", error)
    return NextResponse.json(
      {
        message: "Failed to import event",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

