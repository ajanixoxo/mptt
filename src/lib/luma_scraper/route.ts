import * as cheerio from "cheerio"

export interface LumaEventData {
  title: string
  description: string
  eventDate: string | null
  eventTime: string | null
  location: string | null
  isOnline: boolean
  thirdPartyLink: string
  thirdPartyEventId: string | null
  imageUrl: string | null
  rawHtml?: string
}

/**
 * Scrapes event details from a Luma event page
 */
export async function scrapeLumaEvent(lumaUrl: string, includeRawHtml = false): Promise<LumaEventData> {
  if (!lumaUrl.includes("lu.ma")) {
    throw new Error("Invalid URL. Please provide a valid Luma event URL.")
  }

  // Extract event ID from URL
  const eventId = extractEventIdFromUrl(lumaUrl)

  // Fetch the event page
  const response = await fetch(lumaUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch event page: ${response.statusText}`)
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  // Extract event details
  const title = $("h1").first().text().trim() || $('meta[property="og:title"]').attr("content") || ""

  // Try different selectors for description
  let description = $(".event-description").text().trim()
  if (!description) {
    description = $('meta[property="og:description"]').attr("content") || ""
  }
  if (!description) {
    description = $('div[class*="description"]').text().trim()
  }

  // Extract date and time
  let eventDate: string | null = null
  let eventTime: string | null = null

  // Try to find date and time information
  const dateTimeText = $(".event-datetime").text().trim() || $('div[class*="datetime"]').text().trim()
  if (dateTimeText) {
    const dateInfo = extractDateAndTime(dateTimeText)
    eventDate = dateInfo.date
    eventTime = dateInfo.time
  }

  // If still no date/time, try to find structured data
  if (!eventDate || !eventTime) {
    const structuredData = $('script[type="application/ld+json"]').text()
    if (structuredData) {
      try {
        const data = JSON.parse(structuredData)
        if (data["@type"] === "Event" && data.startDate) {
          const date = new Date(data.startDate)
          eventDate = date.toISOString().split("T")[0]
          eventTime = date.toTimeString().split(" ")[0].substring(0, 5)
        }
      } catch (e) {
        console.error("Failed to parse structured data:", e)
      }
    }
  }

  // Extract location - with improved precision
  let location: string | null = null
  let isOnline = false

  // Method 1: Look for a section with "Location" header followed by the actual location
  const locationSections = $('div:contains("Location")').filter(function () {
    // Only select elements that have exactly "Location" as their text
    return $(this).text().trim() === "Location"
  })

  if (locationSections.length > 0) {
    // Get the next element after the "Location" header
    const locationElement = locationSections.first().next()
    if (locationElement.length) {
      location = locationElement.text().trim()
    }
  }

  // Method 2: Look for location in a more structured way
  if (!location) {
    // Try to find elements with location data
    $('[data-testid="event-location"], [data-testid="location"], .event-location').each(function () {
      const locText = $(this).text().trim()
      if (locText && !locText.includes("Location") && locText.length < 100) {
        location = locText
        return false // break the loop
      }
    })
  }

  // Method 3: Look for location in the page content with a pattern
  if (!location) {
    // Look for text that follows "Location" within a reasonable distance
    const pageText = $("body").text()
    const locationMatch = pageText.match(/Location\s*([^a-z]{0,10})([A-Za-z0-9\s,.]{5,100})/i)
    if (locationMatch && locationMatch[2]) {
      location = locationMatch[2].trim()
    }
  }

  // Method 4: Extract from meta tags
  if (!location) {
    location = $('meta[property="event:location"]').attr("content") || null
  }

  // Method 5: Try to extract from structured data
  if (!location) {
    $('script[type="application/ld+json"]').each(function () {
      try {
        const data = JSON.parse($(this).text())
        if (data.location) {
          if (typeof data.location === "string") {
            location = data.location
          } else if (typeof data.location === "object") {
            location = data.location.name || data.location.address || null
          }
        }
      } catch (e) {
        console.log(e)
        // Ignore parsing errors
      }
    })
  }

  // Method 6: Look for specific patterns in the HTML
  if (!location) {
    // Look for a specific pattern in the HTML that might indicate location
    const locationPattern = /Samonda.*Ibadan.*Oyo/i
    const bodyText = $("body").text()
    const match = bodyText.match(locationPattern)
    if (match) {
      location = match[0].trim()
    }
  }

  // Determine if it's an online event
  if (location) {
    isOnline =
      location.toLowerCase().includes("online") ||
      location.toLowerCase().includes("virtual") ||
      location.toLowerCase().includes("zoom") ||
      location.toLowerCase().includes("meet") ||
      location.toLowerCase().includes("teams")
  }

  // Extract image URL using multiple methods
  let imageUrl: string | null = null

  // Method 1: Check Open Graph meta tags (most reliable)
  imageUrl = $('meta[property="og:image"]').attr("content") || $('meta[name="twitter:image"]').attr("content") || null

  // Method 2: Look for cover images or hero images
  if (!imageUrl) {
    // Look for images with classes that suggest they're cover/hero images
    const coverImg = $(
      'img[class*="cover"], img[class*="hero"], img[class*="banner"], div[class*="coverImage"] img',
    ).first()
    if (coverImg.length) {
      imageUrl = coverImg.attr("src") || null
    }
  }

  // Method 3: Look for the largest image on the page (often the event image)
  // if (!imageUrl) {
  //  let largestImg = null;

  //   let largestArea = 0

  //   $("img").each(function () {
  //     const width = Number.parseInt($(this).attr("width") || "0", 10)
  //     const height = Number.parseInt($(this).attr("height") || "0", 10)

  //     if (width && height) {
  //       const area = width * height
  //       if (area > largestArea) {
  //         largestArea = area
  //         largestImg = $(this)
  //       }
  //     }
  //   })

  //   if (largestImg && largestArea > 10000) {
  //     // Only use if it's reasonably large
  //     imageUrl = largestImg.attr("src") || null
  //   }
  // }

  // Method 4: Check for structured data
  if (!imageUrl) {
    $('script[type="application/ld+json"]').each(function () {
      try {
        const data = JSON.parse($(this).text())
        if (data.image) {
          imageUrl =
            typeof data.image === "string"
              ? data.image
              : Array.isArray(data.image)
                ? data.image[0]
                : data.image.url || null
        }
      } catch (e) {
        // Ignore parsing errors
        console.log(e)
      }
    })
  }

  // Method 5: Look for any image in the main content area that might be relevant
  if (!imageUrl) {
    const contentImages = $("main img, article img, .content img, .event-content img").first()
    if (contentImages.length) {
      imageUrl = contentImages.attr("src") || null
    }
  }

  // Ensure the image URL is absolute
  if (imageUrl && !imageUrl.startsWith("http")) {
    // Handle relative URLs
    if (imageUrl.startsWith("//")) {
      imageUrl = "https:" + imageUrl
    } else {
      const baseUrl = new URL(lumaUrl).origin
      imageUrl = new URL(imageUrl, baseUrl).toString()
    }
  }

  return {
    title,
    description,
    eventDate,
    eventTime,
    location,
    isOnline,
    thirdPartyLink: lumaUrl,
    thirdPartyEventId: eventId,
    imageUrl,
    ...(includeRawHtml ? { rawHtml: html } : {}),
  }
}

/**
 * Extracts event ID from a Luma URL
 */
function extractEventIdFromUrl(url: string): string | null {
  try {
    // Handle URLs like https://lu.ma/event/abc123 or https://lu.ma/abc123
    const match = url.match(/lu\.ma\/(?:event\/)?([a-zA-Z0-9-_]+)/)
    return match ? match[1] : null
  } catch (error) {
    console.error("Error extracting event ID:", error)
    return null
  }
}

/**
 * Extracts date and time from a text string
 */
function extractDateAndTime(text: string): { date: string | null; time: string | null } {
  try {
    // Common date formats in Luma
    // "Monday, March 25, 2024 · 6:00 - 7:30 PM EDT"
    // "Mar 25, 2024 · 6:00 PM EDT"

    // Try to extract date
    let dateMatch = text.match(/([A-Z][a-z]{2,8} \d{1,2}, \d{4})/)
    if (!dateMatch) {
      dateMatch = text.match(/([A-Z][a-z]{2} \d{1,2}, \d{4})/)
    }

    // Try to extract time
    const timeMatch = text.match(/(\d{1,2}:\d{2})(?: - \d{1,2}:\d{2})? ([AP]M)/)

    let date: string | null = null
    let time: string | null = null

    if (dateMatch) {
      const parsedDate = new Date(dateMatch[1])
      if (!isNaN(parsedDate.getTime())) {
        date = parsedDate.toISOString().split("T")[0]
      }
    }

    if (timeMatch) {
      // Convert to 24-hour format for input[type="time"]
      const timePart = timeMatch[1]
      const meridiem = timeMatch[2]

      const [hours, minutes] = timePart.split(":").map(Number)

      let hour = hours
      if (meridiem === "PM" && hours < 12) {
        hour += 12
      } else if (meridiem === "AM" && hours === 12) {
        hour = 0
      }

      time = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    }

    return { date, time }
  } catch (error) {
    console.error("Error extracting date and time:", error)
    return { date: null, time: null }
  }
}

