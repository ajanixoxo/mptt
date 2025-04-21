"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Calendar, MapPin, Users, Trash, Edit } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import  {Toaster} from 'react-hot-toast'

// Define TypeScript interfaces
interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  event_date: string;
  is_online: boolean;
  status: string;
  registration_count: number;
}

export default function EventsPage() {
  const router = useRouter();
  const [recentEvents, setRecentEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [statusFilter, setStatusFilter] = useState<string>("all");


  useEffect(() => {
    fetchEvents();
  }, [statusFilter]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const eventsResponse = await fetch("/api/admin/events");
      const eventsData = await eventsResponse.json();

  if (!eventsResponse.ok) throw new Error("Failed to fetch events");  

      setRecentEvents(eventsData || []); // Assuming eventsData is an array of events

      setStatusFilter("non3")
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete event");

      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };


  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Toaster />
      <AdminSidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Events</h1>
          <button
            onClick={() => router.push("/admin/events/create")}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
          >
            <PlusCircle size={18} />
            <span>Create Event</span>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : recentEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            { recentEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => router.push(`/admin/events/${event.id}`)}
                className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer p-6"
              >
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
                    <span>{event.event_date}</span>
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
                      e.stopPropagation();
                      router.push(`/admin/events/${event.id}/edit`);
                    }}
                    type="button"
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={(e) => handleDelete(event.id, e)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    type="button"
                  >
                    <Trash size={18} />
                  </button>
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
  );
}
