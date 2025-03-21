/**
 * Converts a date string from various formats to YYYY-MM-DD format for input[type="date"]
 */
export function formatDateForInput(dateString: string): string {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return ""
      }
      return date.toISOString().split("T")[0]
    } catch (error) {
      console.error("Error formatting date:", error)
      return ""
    }
  }
  
  /**
   * Converts a time string from various formats to HH:MM format for input[type="time"]
   */
  export function formatTimeForInput(timeString: string): string {
    try {
      // Handle "1:30 PM" format
      if (timeString.includes("AM") || timeString.includes("PM")) {
        const [timePart, meridiem] = timeString.split(" ")
        const [hours, minutes] = timePart.split(":").map(Number)
  
        let hour = hours
        if (meridiem === "PM" && hours < 12) {
          hour += 12
        } else if (meridiem === "AM" && hours === 12) {
          hour = 0
        }
  
        return `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
      }
  
      // Handle "13:30" format
      if (timeString.includes(":")) {
        const [hours, minutes] = timeString.split(":").map(Number)
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
      }
  
      return ""
    } catch (error) {
      console.error("Error formatting time:", error)
      return ""
    }
  }
  
  /**
   * Extracts event ID from a Luma URL
   */
  export function extractEventIdFromLumaUrl(url: string): string | null {
    try {
      // Handle URLs like https://lu.ma/event/abc123
      const match = url.match(/lu\.ma\/(?:event\/)?([a-zA-Z0-9-_]+)/)
      return match ? match[1] : null
    } catch (error) {
      console.error("Error extracting event ID:", error)
      return null
    }
  }
  
  