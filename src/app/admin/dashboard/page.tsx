"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Users, Clock, CheckCircle, PlusCircle } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"
import EventCard from "@/components/admin/EventCard"
import StatsCard from "@/components/admin/StatsCard"
import RecentUsersList from "@/components/admin/RecentUsersList"
import LoadingScreen from "@/components/LoadingScreen"

interface Event {
  id: string;
  title: string;
  description: string;
  status: "active" | "closed";
  eventDate?: string | null;
  createdAt: string;
  location?: string | null;
  _count?: {
    registrations?: number;
  };
}



export default function AdminDashboard() {
  const router = useRouter()
  const [activeEvents, setActiveEvents] = useState(0)
  const [totalRegistrations, setTotalRegistrations] = useState(0)
  const [closedEvents, setClosedEvents] = useState(0)
  const [recentEvents, setRecentEvents] = useState<Event[]>([]);
  const [recentUsers, setRecentUsers] = useState([])
  const [admin, setAdmin] = useState("")
  const [loading, setLoading] = useState(true)
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

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Fetch dashboard statistics
      const dashboardResponse = await fetch("/api/admin/dashboard");
      const dashboardData = await dashboardResponse.json();
  
      if (!dashboardResponse.ok) {
        throw new Error(dashboardData.message || "Failed to fetch dashboard data");
      }
  
      // Fetch events from the events API
      const eventsResponse = await fetch("/api/admin/events");
      const eventsData = await eventsResponse.json();
  
      if (!eventsResponse.ok) {
        throw new Error(eventsData.message || "Failed to fetch events");
      }
  
      setActiveEvents(dashboardData.activeEvents || 0);
      setClosedEvents(dashboardData.closedEvents || 0);
      setTotalRegistrations(dashboardData.totalRegistrations || 0);
      setRecentEvents(eventsData || []); // Assuming eventsData is an array of events
      setRecentUsers(dashboardData.recentUsers || []);
      setAdmin(dashboardData.user.name);
   
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };
  

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
            value={recentEvents.length}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Events */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Recent Events</h2>
              <button
                onClick={() => router.push("/admin/events")}
                className="text-sm text-purple-600 hover:text-purple-800"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentEvents.length > 0 ? (
                recentEvents.map((event) => <EventCard key={event.id} event={event} />)
              ) : (
                <p className="text-gray-500 text-center py-4">No events found</p>
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

          {/* Recent Registrations */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Recent Registrations</h2>
              <button
                onClick={() => router.push("/admin/registrations")}
                className="text-sm text-purple-600 hover:text-purple-800"
              >
                View All
              </button>
            </div>

            <RecentUsersList users={recentUsers} />
          </div>
        </div>
      </div>
    </div>
  )
}

