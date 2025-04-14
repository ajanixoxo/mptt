import { NextResponse } from "next/server"
import { scrapeLumaEvent } from "@/lib/luma_scraper/route"
import prisma from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const { url, includeRawHtml, autoSave, id } = await request.json()

    if (!url) {
      return NextResponse.json(
        { message: "Luma URL is required" },
        { status: 400 },
      )
    }

    console.log(`Attempting to scrape Luma event: ${url}`)

    // Step 1: Scrape the event
    const eventData = await scrapeLumaEvent(url, includeRawHtml)

    // Step 2: If autoSave is true, save to DB
    if (autoSave) {
      const savedEvent = await prisma.event.update({
        where:{id},
        data: {
          title: eventData.title,
          description: eventData.description,
          eventDate: eventData.eventDate ? new Date(eventData.eventDate) : undefined,
          location: eventData.location,
          thirdPartyLink: url,
          thirdPartyEventId: eventData.thirdPartyEventId,
          isOnline: eventData.isOnline ?? false,
          status: "active", // or "draft" depending on your app flow
        },
      })

      return NextResponse.json(
        {
          message: "Event scraped and saved successfully",
          event: savedEvent,
        },
        { status: 201 },
      )
    }

    // Step 3: If not auto saving, just return the data
    return NextResponse.json(
      {
        message: "Event scraped successfully",
        event: eventData,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Scrape Luma event error:", error)
    return NextResponse.json(
      {
        message: "Failed to scrape event",
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
