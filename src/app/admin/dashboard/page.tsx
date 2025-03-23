"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Users, Clock, CheckCircle, PlusCircle, MapPin, User } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"
import StatsCard from "@/components/admin/StatsCard"
import LoadingScreen from "@/components/LoadingScreen"
import Link from "next/link"

// Define the Event interface
interface Event {
  id: string
  title: string
  description: string
  status: string
  eventDate?: string | null
  createdAt: string
  location?: string | null
  isOnline?: boolean
  _count?: {
    registrations: number
  }
}

export default function AdminDashboard() {
  const router = useRouter()
  const [activeEvents, setActiveEvents] = useState(0)
  const [totalRegistrations, setTotalRegistrations] = useState(0)
  const [closedEvents, setClosedEvents] = useState(0)
  const [recentEvents, setRecentEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [admin, setAdmin] = useState("Admin")

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/auth/check")
        if (!response.ok) {
          router.push("/admin/login")
          return
        }

        fetchDashboardData()
      } catch (error) {
        console.error("Auth check error:", error)
        router.push("/admin/login")
      }
    }

    checkAuth()
  }, [router])

  // Update the fetchDashboardData function to only fetch events and calculate counts from them
  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      // Only fetch events from the events API
      const eventsResponse = await fetch("/api/admin/events")
      const eventsData = (await eventsResponse.json()) as Event[]

      if (!eventsResponse.ok) {
        throw new Error("Failed to fetch events")
      }

      // Get admin info
      const authResponse = await fetch("/api/admin/auth/check")
      const authData = await authResponse.json()

      if (!authResponse.ok) {
        throw new Error("Failed to fetch admin data")
      }

      // Calculate counts from the events array
      const active = eventsData.filter((event) => event.status === "active").length
      const closed = eventsData.filter((event) => event.status === "closed").length

      // Set the state with calculated values
      setActiveEvents(active)
      setClosedEvents(closed)
      setTotalRegistrations(eventsData.reduce((total, event) => total + (event._count?.registrations || 0), 0))
      setRecentEvents(eventsData.slice(0, 5)) // Take the first 5 events as recent
      setAdmin(authData.user?.name || "Admin")
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  // Format date helper function
  const formatDate = (dateString: string | Date | null | undefined) => {
    if (!dateString) return "No date"
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {admin}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Events"
            value={activeEvents}
            icon={<Calendar className="h-8 w-8 text-blue-500" />}
            bgColor="bg-blue-50"
          />
          <StatsCard
            title="Total Registrations"
            value={totalRegistrations}
            icon={<Users className="h-8 w-8 text-green-500" />}
            bgColor="bg-green-50"
          />
          <StatsCard
            title="Closed Events"
            value={closedEvents}
            icon={<CheckCircle className="h-8 w-8 text-purple-500" />}
            bgColor="bg-purple-50"
          />
          <StatsCard
            title="Upcoming Events"
            value={activeEvents}
            icon={<Clock className="h-8 w-8 text-yellow-500" />}
            bgColor="bg-yellow-50"
          />
        </div>

        {/* Recent Events - Now takes full width */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Events</h2>
            <button
              onClick={() => router.push("/admin/events")}
              className="text-sm text-purple-600 hover:text-purple-800"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentEvents.length > 0 ? (
              recentEvents.map((event) => (
                <Link href={`/admin/events/${event.id}`} key={event.id}>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800">{event.title}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          event.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.status === "active" ? "Active" : "Closed"}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{event.description}</p>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(event.eventDate || event.createdAt)}</span>
                      </div>

                      {event.location && (
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{event.location}</span>
                        </div>
                      )}

                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{event._count?.registrations || 0} registered</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4 col-span-3">No events found</p>
            )}
          </div>

          <button
            onClick={() => router.push("/admin/events/create")}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            <PlusCircle size={18} />
            <span>Create New Event</span>
          </button>
        </div>
      </div>
    </div>
  )
}

