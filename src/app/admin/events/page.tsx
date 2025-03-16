"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { PlusCircle, Search, Filter, ChevronDown, Calendar, MapPin, Users, Trash, Edit } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default function EventsPage() {
  const router = useRouter()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    fetchEvents()
  }, [statusFilter])

  const fetchEvents = async () => {
    setLoading(true)
    try {
      let query = supabase
        .from("events")
        .select(`
          *,
          registrations:registrations(count)
        `)
        .order("created_at", { ascending: false })

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter)
      }

      const { data, error } = await query

      if (error) throw error

      // Process the data to get registration count
      const eventsWithCount = data.map((event) => ({
        ...event,
        registration_count: event.registrations?.[0]?.count || 0,
      }))

      setEvents(eventsWithCount)
    } catch (error) {
      console.error("Error fetching events:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Filter events based on search query
    // This is client-side filtering, but you could also implement server-side search
  }

  const handleDelete = async (id, e) => {
    e.preventDefault()
    e.stopPropagation()

    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        // First delete all registrations for this event
        await supabase.from("registrations").delete().eq("event_id", id)

        // Then delete the event
        const { error } = await supabase.from("events").delete().eq("id", id)

        if (error) throw error

        // Refresh the events list
        fetchEvents()
      } catch (error) {
        console.error("Error deleting event:", error)
      }
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Events</h1>
          <button
            onClick={() => router.push("/admin/events/create")}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            <PlusCircle size={18} />
            <span>Create Event</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <form onSubmit={handleSearch} className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Filter size={18} />
              <span>Filters</span>
              <ChevronDown size={16} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </form>

          {showFilters && (
            <div className="flex flex-wrap gap-4 pt-2 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Events</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              {/* Add more filters as needed */}
            </div>
          )}
        </div>

        {/* Events List */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => router.push(`/admin/events/${event.id}`)}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                      <p className="text-gray-500 mt-1">{event.description.substring(0, 150)}...</p>
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        event.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.status === "active" ? "Active" : "Closed"}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(event.event_date || event.created_at)}</span>
                    </div>

                    {event.location && (
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    )}

                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      <span>{event.registration_count} registered</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push(`/admin/events/edit/${event.id}`)
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={(e) => handleDelete(event.id, e)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 mb-4">No events found</p>
            <button
              onClick={() => router.push("/admin/events/create")}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
            >
              <PlusCircle size={18} />
              <span>Create your first event</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

