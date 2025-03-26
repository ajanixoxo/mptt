"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, LinkIcon, Loader2, AlertCircle, Download } from "lucide-react"
import LoadingScreen from "@/components/LoadingScreen"
import type { Event } from "@prisma/client"
import { formatDateForInput, formatTimeForInput } from "@/utils/date-utils"

interface ScrapedEvent {
  title: string
  description: string
  eventDate: string | null
  eventTime: string | null
  location: string | null
  isOnline: boolean
  thirdPartyLink: string
  thirdPartyEventId: string | null
  imageUrl: string
}

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string

  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [scrapingUrl, setScrapingUrl] = useState("")
  const [scraping, setScraping] = useState(false)
  const [scrapedPreview, setScrapedPreview] = useState<ScrapedEvent | null>(null)
  const [error, setError] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({})

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    eventDate: "",
    eventTime: "",
    isOnline: false,
    status: "active",
    thirdPartyLink: "",
    thirdPartyEventId: "",
    imageUrl: ""
  })

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/admin/events/${eventId}`)

        if (!response.ok) {
          throw new Error("Failed to fetch event")
        }

        const data = await response.json()
        setEvent(data)

        // Format the date and time for the form inputs
        let eventDate = ""
        let eventTime = ""

        if (data.eventDate) {
          const date = new Date(data.eventDate)
          eventDate = formatDateForInput(date.toISOString())
          eventTime = formatTimeForInput(date.toISOString())
        }

        setFormData({
          title: data.title || "",
          description: data.description || "",
          location: data.location || "",
          eventDate: eventDate,
          eventTime: eventTime,
          isOnline: data.isOnline || false,
          status: data.status || "active",
          thirdPartyLink: data.thirdPartyLink || "",
          thirdPartyEventId: data.thirdPartyEventId || "",
          imageUrl: data.imageUrl || ""
        })
        setScrapingUrl(data.thirdPartyLink)
      } catch (error) {
        console.error("Error fetching event:", error)
        setError(error instanceof Error ? error.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }
    if (eventId) {
      fetchEvent()
    }
  }, [eventId])



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")

    try {
      // Combine date and time for the eventDate field
      let eventDate = null
      if (formData.eventDate) {
        const dateTime = `${formData.eventDate}T${formData.eventTime || "00:00"}:00`
        eventDate = new Date(dateTime).toISOString()
      }

      const response = await fetch(`/api/admin/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          location: formData.location,
          eventDate: eventDate,
          isOnline: formData.isOnline,
          status: formData.status,
          thirdPartyLink: formData.thirdPartyLink || null,
          thirdPartyEventId: formData.thirdPartyEventId || null,
          imageUrl: formData.imageUrl
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to update event")
      }

      // Navigate back to the event details page
      router.push(`/admin/events/${eventId}`)
      router.refresh()
    } catch (error) {
      console.error("Error updating event:", error)
      setError(error instanceof Error ? error.message : "Failed to update event")
    } finally {
      setSaving(false)
    }
  }

  const handleScrapeEvent = async () => {

    setScraping(true)
    try {
      const response = await fetch("/api/scrape-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: scrapingUrl }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to scrape event details")
      }

      const data = await response.json()

      // Map scraped data to form fields
      if (data.event) {
        const event = data.event as ScrapedEvent
        setScrapedPreview(event)

        setFormData({
          ...formData,
          title: event.title || formData.title,
          description: event.description || formData.description,
          eventDate: event.eventDate || formData.eventDate,
          eventTime: event.eventTime || formData.eventTime,
          isOnline: event.isOnline !== undefined ? event.isOnline : formData.isOnline,
          imageUrl: event.imageUrl || formData.imageUrl,
          location: !event.isOnline ? event.location || formData.location : formData.location,

          thirdPartyLink: event.thirdPartyLink || formData.thirdPartyLink,
          thirdPartyEventId: event.thirdPartyEventId || formData.thirdPartyEventId,
        })
        alert("Succesfuly scraped")
      }
    } catch (error) {
      console.error("Error scraping event:", error)
      setErrors((prev) => ({
        ...prev,
        scrapingUrl: error instanceof Error ? error.message : "Failed to scrape event details",
      }))
    } finally {
      setScraping(false)
    }
  }
  if (loading) {
    return <LoadingScreen />
  }

  if (error && !event) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">{error}</div>
        <button onClick={() => router.back()} className="mt-4 flex items-center text-purple-600 hover:text-purple-800">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <button
          onClick={() => router.push(`/admin/events/${eventId}`)}
          className="flex items-center text-purple-600 hover:text-purple-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Event Details
        </button>
        <h1 className="text-2xl font-bold mt-4 text-gray-800">Edit Event</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">{error}</div>}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Import from Luma</h2>
          <p className="text-gray-600 mb-4">Enter a Luma event URL to automatically import event details.</p>

          <div className="flex space-x-2">
            <div className="flex-1">
              <input
                type="url"
                value={scrapingUrl}
                onChange={(e) => setScrapingUrl(e.target.value)}
                placeholder="https://lu.ma/your-event"
                className={`w-full px-4 py-2 border text-black ${errors.scrapingUrl ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
              />
              {errors.scrapingUrl && <p className="mt-1 text-sm text-red-500">{errors.scrapingUrl}</p>}
            </div>
            <button
              type="button"
              onClick={handleScrapeEvent}
              disabled={scraping}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center disabled:opacity-50"
            >
              {scraping == true ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  <span>Importing...</span>
                </>
              ) : (
                <>
                  <Download size={16} className="mr-2" />
                  <span>Import</span>
                </>
              )}
            </button>
          </div>

          {/* Preview of scraped data */}
          {scrapedPreview && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
              <h3 className="text-md font-semibold text-blue-800 mb-2">Event Details Imported</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-700">
                    <strong>Title:</strong> {scrapedPreview.title}
                  </p>
                  <p className="text-blue-700">
                    <strong>Date:</strong> {scrapedPreview.eventDate || "Not found"}
                  </p>
                  <p className="text-blue-700">
                    <strong>Time:</strong> {scrapedPreview.eventTime || "Not found"}
                  </p>
                </div>
                <div>
                  <p className="text-blue-700">
                    <strong>Location:</strong> {scrapedPreview.location || "Not found"}
                  </p>
                  <p className="text-blue-700">
                    <strong>Type:</strong> {scrapedPreview.isOnline ? "Online" : "In-person"}
                  </p>
                  <p className="text-blue-700">
                    <strong>Event ID:</strong> {scrapedPreview.thirdPartyEventId || "Not found"}
                  </p>
                  <p className="text-blue-700">
                    <strong>Image:</strong> {scrapedPreview.imageUrl || "Not found"}
                  </p>
                </div>
              </div>

              {(!scrapedPreview.eventDate || !scrapedPreview.eventTime || !scrapedPreview.location) && (
                <div className="mt-2 flex items-start text-yellow-700 bg-yellow-50 p-2 rounded">
                  <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-xs">
                    Some event details couldn't be automatically extracted. Please check and fill in any missing
                    information.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 !text-black">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Event Title*
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 !text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 !text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 !text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                Event Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-1">
                Event Time
              </label>
              <input
                id="eventTime"
                name="eventTime"
                type="time"
                value={formData.eventTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border !text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border !text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="thirdPartyLink" className="block text-sm font-medium text-gray-700 mb-1">
                Event Image Url
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/register"
                  className="w-full pl-10 px-4 py-2 !text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Users will be redirected to this link after registering on our platform
              </p>
            </div>

            <div>
              <label htmlFor="thirdPartyLink" className="block text-sm font-medium text-gray-700 mb-1">
                Third-Party Registration Link
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="thirdPartyLink"
                  name="thirdPartyLink"
                  type="url"
                  value={formData.thirdPartyLink}
                  onChange={handleChange}
                  placeholder="https://example.com/register"
                  className="w-full pl-10 px-4 py-2 !text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Users will be redirected to this link after registering on our platform
              </p>
            </div>

            <div>
              <label htmlFor="thirdPartyEventId" className="block text-sm font-medium text-gray-700 mb-1">
                Third-Party Event ID
              </label>
              <input
                id="thirdPartyEventId"
                name="thirdPartyEventId"
                type="text"
                value={formData.thirdPartyEventId}
                onChange={handleChange}
                className="w-full px-4 py-2 border !text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="mt-1 text-xs text-gray-800">
                Optional: Store the event ID from the third-party platform for reference
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                id="isOnline"
                name="isOnline"
                type="checkbox"
                checked={formData.isOnline}
                onChange={handleCheckboxChange}
                className="h-4 w-4 t !text-black focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="isOnline" className="ml-2 block text-sm text-gray-700">
                Online Event
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => router.push(`/admin/events/${eventId}`)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-purple-600 text-black rounded-md hover:bg-purple-700 disabled:opacity-50 flex items-center"
            >
              {saving ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  <span>Saving...</span>
                </>
              ) : (
                "Update Event"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

