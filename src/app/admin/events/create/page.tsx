"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, LinkIcon, Download, Loader2, AlertCircle } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"
import toast from 'react-hot-toast'
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

export default function CreateEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [scrapingUrl, setScrapingUrl] = useState("")
  const [scraping, setScraping] = useState(false)
  const [scrapedPreview, setScrapedPreview] = useState<ScrapedEvent | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_date: "",
    event_time: "",
    is_online: false,
    imageUrl: "",
    location: "",
    meeting_app: "",
    status: "active",
    thirdPartyLink: "", // New field for third-party link
    thirdPartyEventId: "", // New field for third-party event ID
  })

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    // Only access `checked` if it's an <input type="checkbox" | type="radio">
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
     if (!formData.imageUrl.trim()) newErrors.imageUrl = "Image is required"
    if (!formData.event_date) newErrors.event_date = "Event date is required"
    if (!formData.event_time) newErrors.event_time = "Event time is required"
    if (!formData.is_online && !formData.location.trim()) {
      newErrors.location = "Location is required for in-person events"
    }
    if (formData.is_online && !formData.meeting_app.trim()) {
      newErrors.meeting_app = "Meeting app is required for online events"
    }

    // Validate third-party link if provided
    if (formData.thirdPartyLink && !formData.thirdPartyLink.startsWith("http")) {
      newErrors.thirdPartyLink = "Please enter a valid URL starting with http:// or https://"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    try {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          eventDate: `${formData.event_date}T${formData.event_time}`,
          isOnline: formData.is_online,
          imageUrl: formData.imageUrl,
          location: formData.is_online ? formData.meeting_app : formData.location,
          status: formData.status,
          thirdPartyLink: formData.thirdPartyLink || null,
          thirdPartyEventId: formData.thirdPartyEventId || null,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to create event")
      }
     toast.success("Event Created")
      router.push("/admin/events")
    } catch (error) {
      console.error("Error creating event:", error)
      alert("Failed to create event. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleScrapeEvent = async () => {
    if (!scrapingUrl || !scrapingUrl.trim()) {
      setErrors((prev) => ({ ...prev, scrapingUrl: "Please enter a Luma event URL" }))
      return
    }

    if (!scrapingUrl.includes("lu.ma")) {
      setErrors((prev) => ({ ...prev, scrapingUrl: "Please enter a valid Luma event URL" }))
      return
    }

    setScraping(true)
    setErrors((prev) => ({ ...prev, scrapingUrl: null }))
    setScrapedPreview(null)

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
          event_date: event.eventDate || formData.event_date,
          event_time: event.eventTime || formData.event_time,
          is_online: event.isOnline !== undefined ? event.isOnline : formData.is_online,
          imageUrl: event.imageUrl || formData.imageUrl, 
          location: !event.isOnline ? event.location || formData.location : formData.location,
          meeting_app: event.isOnline ? event.location || formData.meeting_app : formData.meeting_app,
          thirdPartyLink: event.thirdPartyLink || formData.thirdPartyLink,
          thirdPartyEventId: event.thirdPartyEventId || formData.thirdPartyEventId,
        })
      }
      toast.success("Event Scraped")
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <button onClick={() => router.back()} className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to Events</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Create New Event</h1>
        </div>

        {/* Luma Event Scraper Section */}
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
                className={`w-full px-4 py-2 border text-black ${
                  errors.scrapingUrl ? "border-red-500" : "border-gray-300"
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
              {scraping ? (
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
                  {/* <p className="text-blue-700 overflow-hidden">
                    <strong>Image:</strong> {scrapedPreview.imageUrl || "Not found"}
                  </p> */}
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

        <div className="bg-white rounded-lg shadow p-6 text-black">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-md`}
                  placeholder="Enter event title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-md`}
                  placeholder="Enter event description"
                />
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Date*</label>
                  <input
                    type="date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.event_date ? "border-red-500" : "border-gray-300"} rounded-md`}
                    placeholder="https"
                  />
                  {errors.event_date && <p className="mt-1 text-sm text-red-500">{errors.event_date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Time*</label>
                  <input
                    type="time"
                    name="event_time"
                    value={formData.event_time}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.event_time ? "border-red-500" : "border-gray-300"} rounded-md`}
                      placeholder="https"
                  />
                  {errors.event_time && <p className="mt-1 text-sm text-red-500">{errors.event_time}</p>}
                </div>
              </div>

              {/* Event Type: Online or In-Person */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type*</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="is_online"
                      value="true"
                      checked={formData.is_online}
                      onChange={handleChange}
                      className="text-purple-600"
                    />
                    <span>Online</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="is_online"
                      value="false"
                      checked={!formData.is_online}
                      onChange={handleChange}
                      className="text-purple-600"
                    />
                    <span>Meet in Person</span>
                  </label>
                </div>
              </div>

              {/* Conditional Inputs */}
              {formData.is_online ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meeting App*</label>
                  <input
                    type="text"
                    name="meeting_app"
                    value={formData.meeting_app}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Google Meet, Zoom, etc."
                  />
                  {errors.meeting_app && <p className="mt-1 text-sm text-red-500">{errors.meeting_app}</p>}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter event location"
                  />
                  {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
                </div>
              )}

              {/* Third-Party Integration Section */}
              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Third-Party Integration</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                     Event Image Url
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LinkIcon size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.imageUrl ? "border-red-500" : "border-gray-300"} rounded-md`}
                        placeholder="https://example.com/register"
                      />
                    </div>
                    {errors.thirdPartyLink && <p className="mt-1 text-sm text-red-500">{errors.imageUrl}</p>}
                 
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Third-Party Registration Link
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LinkIcon size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="thirdPartyLink"
                        value={formData.thirdPartyLink}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.thirdPartyLink ? "border-red-500" : "border-gray-300"} rounded-md`}
                        placeholder="https://example.com/register"
                      />
                    </div>
                    {errors.thirdPartyLink && <p className="mt-1 text-sm text-red-500">{errors.thirdPartyLink}</p>}
                    <p className="mt-1 text-xs text-gray-500">
                      Users will be redirected to this link after registering on our platform
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Third-Party Event ID (Optional)
                    </label>
                    <input
                      type="text"
                      name="thirdPartyEventId"
                      value={formData.thirdPartyEventId}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="External event identifier"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      For reference only - store the event ID from the third-party platform
                    </p>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Create Event"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

