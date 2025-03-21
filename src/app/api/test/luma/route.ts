import { NextResponse } from "next/server"
import { scrapeLumaEvent } from "@/lib/luma_scraper/route"

export async function POST(request: Request) {
  try {
    const { lumaUrl, includeRawHtml } = await request.json()

    if (!lumaUrl) {
      return NextResponse.json(
        {
          message: "Luma URL is required",
        },
        { status: 400 },
      )
    }

    console.log(`Attempting to scrape Luma event: ${lumaUrl}`)

    // Scrape event data from Luma
    const eventData = await scrapeLumaEvent(lumaUrl, includeRawHtml)

    return NextResponse.json(
      {
        message: "Event scraped successfully",
        eventData,
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

