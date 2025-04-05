import { NextResponse } from "next/server"
import { scrapeLumaEvent } from "@/lib/luma_scraper/route"

export async function POST(request: Request) {
  try {
    const { url, includeRawHtml } = await request.json()

    if (!url) {
      return NextResponse.json(
        {
          message: "Luma URL is required",
        },
        { status: 400 },
      )
    }

    console.log(`Attempting to scrape Luma event: ${url}`)

    // Scrape event data from Luma
    const eventData = await scrapeLumaEvent(url, includeRawHtml)
     console.log("This is the event data from scraper ", eventData)
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

