import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventCard({ event }) {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <Link href={`/admin/events/${event.id}`}>
      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
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
            <Users size={14} className="mr-1" />
            <span>{event._count?.registrations || 0} registered</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

