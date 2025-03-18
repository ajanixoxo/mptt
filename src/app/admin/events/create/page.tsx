"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, LinkIcon } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function CreateEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_date: "",
    event_time: "",
    is_online: false,
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

      router.push("/admin/events")
    } catch (error) {
      console.error("Error creating event:", error)
      alert("Failed to create event. Please try again.")
    } finally {
      setLoading(false)
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

