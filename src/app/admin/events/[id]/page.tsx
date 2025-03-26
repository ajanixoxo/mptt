"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Globe,
  Edit,
  Trash2,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import LoadingScreen from "@/components/LoadingScreen"
import type { Event, Registration } from "@prisma/client"

interface EventWithDetails extends Event {
  registrations: Registration[]
  createdBy: {
    name: string
    email: string
  }
  _count?: {
    registrations: number
  }
}

export default function EventDetailPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string

  const [event, setEvent] = useState<EventWithDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [syncLoading, setSyncLoading] = useState(false)
  const [syncSuccess, setSyncSuccess] = useState(false)
  const [syncError, setSyncError] = useState("")

  const fetchEvent = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/events/${eventId}`)

      if (!response.ok) {
        throw new Error("Failed to fetch event")
      }

      const data = (await response.json()) as EventWithDetails
      setEvent(data)
    } catch (error) {
      console.error("Error fetching event:", error)
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [eventId])

  useEffect(() => {
    fetchEvent()
  }, [fetchEvent])

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
      return
    }

    setDeleteLoading(true)

    try {
      const response = await fetch(`/api/admin/events/${eventId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete event")
      }

      router.push("/admin/events")
      router.refresh()
    } catch (error) {
      console.error("Error deleting event:", error)
      alert("Failed to delete event. Please try again.")
    } finally {
      setDeleteLoading(false)
    }
  }

  const handleSyncWithLuma = async () => {
    if (!event?.thirdPartyLink) return

    setSyncLoading(true)
    setSyncSuccess(false)
    setSyncError("")

    try {
      const response = await fetch(`/api/scrape-event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: event.thirdPartyLink }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to sync with Luma")
      }

      // Refresh the event data
      await fetchEvent()
      setSyncSuccess(true)

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSyncSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error syncing with Luma:", error)
      setSyncError(error instanceof Error ? error.message : "Failed to sync with Luma")
    } finally {
      setSyncLoading(false)
    }
  }

  // Format date
  const formatDate = (dateString: Date | string | null) => {
    if (!dateString) return "No date specified"

    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">{error}</div>
        <button onClick={() => router.back()} className="mt-4 flex items-center text-purple-600 hover:text-purple-800">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </button>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="p-8">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-md">Event not found</div>
        <button
          onClick={() => router.push("/admin/events")}
          className="mt-4 flex items-center text-purple-600 hover:text-purple-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </button>
      </div>
    )
  }

  return (
    <div className="p-2 md:p-8">
      <div className="mb-6">
        <button
          onClick={() => router.push("/admin/events")}
          className="flex items-center text-purple-600 hover:text-purple-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-4 border-b border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Created on {formatDate(event.createdAt)}</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-3">
              {event.thirdPartyLink && (
                <button
                  onClick={handleSyncWithLuma}
                  disabled={syncLoading}
                  className="flex items-center text-sm md:text-auto px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                >
                  {syncLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-1 animate-spin" /> Syncing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-1" /> Sync
                    </>
                  )}
                </button>
              )}
              <Link
                href={`/admin/events/${event.id}/edit`}
                className="flex items-center px-3 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                <Edit className="h-4 w-4 mr-1" /> Edit
              </Link>
              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="flex items-center px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4 mr-1" /> {deleteLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>

          {syncSuccess && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md flex items-center">
              <CheckCircle size={18} className="mr-2" />
              Event successfully synced with Luma!
            </div>
          )}

          {syncError && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md flex items-center">
              <AlertCircle size={18} className="mr-2" />
              {syncError}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                event.status === "active" ? "bg-green-200 text-green-700" : "bg-gray-200 text-gray-700"
              }`}
            >
              {event.status === "active" ? "Active" : "Closed"}
            </span>
            {event.isOnline && (
              <span className="px-3 py-1 bg-blue-200 text-blue-700 rounded-full text-sm font-medium">
                <Globe className="inline h-3 w-3 mr-1" /> Online Event
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold mb-3 text-gray-900">Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.description}</p>

              {event.thirdPartyLink && (
                <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Imported from Luma</h3>
                  <p className="text-blue-700 mb-2">
                    This event was imported from Luma and is linked to their registration system.
                  </p>
                  <div className="flex items-center mt-3">
                    <a
                      href={event.thirdPartyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-800 hover:underline"
                    >
                      View on Luma <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                    {event.thirdPartyEventId && (
                      <span className="ml-4 text-sm text-gray-600">ID: {event.thirdPartyEventId}</span>
                    )}
                  </div>
                </div>
              )}

              {event.thirdPartyLink && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-3 text-gray-900">Third-Party Registration</h2>
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                    <p className="text-blue-700 mb-2">
                      Users are being redirected to the following link after registering on our platform:
                    </p>
                    <a
                      href={event.thirdPartyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-800 hover:underline break-all"
                    >
                      {event.thirdPartyLink}
                      <ExternalLink className="h-4 w-4 ml-1 flex-shrink-0" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3 text-gray-900">Event Details</h2>
                <ul className="space-y-3">
                  {event.eventDate && (
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                      <div>
                        <span className="block text-sm font-medium text-gray-700">Date & Time</span>
                        <span className="text-gray-600">{formatDate(event.eventDate)}</span>
                      </div>
                    </li>
                  )}

                  {event.location && (
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                      <div>
                        <span className="block text-sm font-medium text-gray-700">Location</span>
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

