"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { Calendar, Clock, MapPin, Globe, Save, ArrowLeft } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default function CreateEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    event_date: "",
    event_time: "",
    is_online: false,
    status: "active",
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!formData.event_date) {
      newErrors.event_date = "Event date is required"
    }

    if (!formData.event_time) {
      newErrors.event_time = "Event time is required"
    }

    if (!formData.is_online && !formData.location.trim()) {
      newErrors.location = "Location is required for in-person events"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Combine date and time
      const eventDateTime = new Date(`${formData.event_date}T${formData.event_time}`)

      const { data, error } = await supabase
        .from("events")
        .insert([
          {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            event_date: eventDateTime.toISOString(),
            is_online: formData.is_online,
            status: formData.status,
            created_at: new Date().toISOString(),
          },
        ])
        .select()

      if (error) throw error

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

        <div className="bg-white rounded-lg shadow p-6">
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
                  className={`w-full px-4 py-2 border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
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
                  className={`w-full px-4 py-2 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Enter event description"
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>Event Date*</span>
                    </div>
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.event_date ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  {errors.event_date && <p className="mt-1 text-sm text-red-500">{errors.event_date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>Event Time*</span>
                    </div>
                  </label>
                  <input
                    type="time"
                    name="event_time"
                    value={formData.event_time}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.event_time ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  {errors.event_time && <p className="mt-1 text-sm text-red-500">{errors.event_time}</p>}
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="is_online"
                    name="is_online"
                    checked={formData.is_online}
                    onChange={handleChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_online" className="ml-2 block text-sm text-gray-700">
                    <div className="flex items-center">
                      <Globe size={16} className="mr-2" />
                      <span>This is an online event</span>
                    </div>
                  </label>
                </div>

                {!formData.is_online && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>Location*</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.location ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter event location"
                    />
                    {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
                  </div>
                )}
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={18} />
                      <span>Create Event</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

